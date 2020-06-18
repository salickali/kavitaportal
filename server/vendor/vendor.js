const express = require('express')
const router = express.Router()
const _ = require('lodash')
const convert = require('xml-js')

const {
	vendorInvoicePost,
	vendorCreditMemoPost,
	vendorPaymentOverduesPost,
	vendorUpdateDetails,
	vendorGoodsReceipt,
	vendorPurchaseOrders,
	vendorLogin,
	vendorQuotationDetails,
	vendorProfile,
	custSalesOrders
} = require('./constants')

router.post('/login', async (req, res) => { // Sample req: username: 1234567890, password: 12345678
	const reqResult = _.pick(req.body, ['username', 'password'])
	const body = await vendorLogin(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:MT_VENDID_RESP_DKS_00']['VALIDATED']['_text']
	data = parseInt(data)
	if (data === 1)
		res.status(200).json({ data: 1 })
	else
		res.status(400).json({ data: 0 })
})

router.post('/logindetails', async (req, res) => { // Sample req: 100100, 1234567890
	const reqResult = _.pick(req.body, ['lifnr'])
	const body = await vendorDetails(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:BAPI_VENDOR_DISPLAY.Response']
	res.status(200).json({ data })
})

router.patch('/update', async (req, res) => { // Sample req: 1234567890
	const reqResult = _.pick(req.body, ['NAME', 'AGE', 'ADDRESS', 'BANKL', 'ITEMS'])
	const data = await vendorUpdateDetails(reqResult)
	res.status(200).json({ data: reqResult })
})

router.post('/invoice', async (req, res) => { // Sample req: STEEL
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['lifnr', 'matnr'])
	const body = await vendorInvoicePost(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_VENDOR_INVOICE.Response']['ITAB']
	for (let query in data) {
		finalizedResult[query] = data[query]['_text']
	}
	if (_.pick(finalizedResult, 'LIFNR')['LIFNR'] !== undefined) {
		res.status(200).json({ data: finalizedResult })
	} else {
		res.status(400).json({ error: 'Please specify correct Vendor ID' })
	}
})

router.post('/creditmemo', async (req, res) => { // Sample req: 4500000000
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['lifnr'])
	const body = await vendorCreditMemoPost(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:BAPI_VENDORCREDITMEMODKS00.Response']['ITAB']['item']
	if (!data) {
		res.status(400).json({ error: 'Please enter correct Vendor ID' })
	}
	finalizedResult[reqResult.lifnr] = []
	for (let i = 0; i < data.length; ++i) {
		finalizedResult[reqResult.lifnr].push(
			_.pick(data[i], ['LIFNR', 'BELNR', 'BUDAT', 'MENGE', 'DMBTR', 'WRBTR', 'WAERS', 'AREWR', 'REEWR', 'REFWR', 'MATNR', 'WERKS', 'AREWW', 'HSWAE', 'BLDAT', 'AREWB', 'REWRB'])
		)
	}
	res.status(200).json({ data: finalizedResult })
})

router.post('/paymentoverdues', async (req, res) => { // Sample req: 0000010046
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['lifnr'])
	const size = reqResult.lifnr.toString().length
	reqResult.lifnr = size < 10 ? '0'.repeat(10 - size).concat(reqResult.lifnr.toString()) : reqResult.lifnr.toString()
	const body = await vendorPaymentOverduesPost(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:BAPI_VENPAY2DKS.Response']['ITAB']['item']
	if (!data) {
		res.status(400).json({ error: 'Please enter correct Vendor ID' })
	}
	finalizedResult[reqResult.lifnr] = []
	for (let i = 0; i < data.length; ++i) {
		finalizedResult[reqResult.lifnr].push(
			_.pick(data[i], ['LIFNR', 'BELNR', 'BUKRS', 'GJAHR', 'BLDAT', 'BLART'])
		)
	}
	res.status(200).json({ data: finalizedResult })
})

router.post('/goodsreceipt', async (req, res) => { // Sample req: STEEL
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['lifnr'])
	const body = await vendorGoodsReceipt(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_KMM_FM002.Response']['ITEMTAB']
	for (let query in data) {
		finalizedResult[query] = data[query]['_text']
	}
	res.status(200).json({ data: finalizedResult })
})

router.post('/purchaseorders', async (req, res) => { // Sample req: SA01
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['bukrs'])
	const body = await vendorPurchaseOrders(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_DISPLAY_PO.Response']['MATERIAL_DETAILS']
	for (let query in data) {
		finalizedResult[query] = data[query]['_text']
	}
	res.status(200).json({ data: finalizedResult })
})

router.post('/quotation', async (req, res) => { // Sample req: ekorg: "SA01", erdat: "2018--8-26", lifnr: "0000010032", mandt: 100
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['ebeln'])
	const body = await vendorQuotationDetails(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZBAPI_KMM_FM006.Response']['ITEMTAB']
	for (let query in data) {
		finalizedResult[query] = data[query]['_text']
	}
	res.status(200).json({ data: finalizedResult })
})

router.post('/salesorders', async (req, res) => { // Sample req: SA01
	const finalizedResult = {}
	const reqResult = _.pick(req.body, ['matnr'])
	const body = await  custSalesOrders(reqResult)
	let data = convert.xml2json(body, { compact: true, spaces: 2 })
	data = JSON.parse(data)['SOAP:Envelope']['SOAP:Body']['ns0:ZSALESORDER_DISPLAY1.Response']['SALES']
	for (let query in data) {
		finalizedResult[query] = data[query]['_text']
	}

	res.status(200).json({ data: finalizedResult })
})

module.exports = router
