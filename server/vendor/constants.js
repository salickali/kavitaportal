const axios = require('axios')

const {
	VENDOR_INVOICE,
	VENDOR_CREDIT_MEMO,
	VENDOR_PAYMENT_OVERDUES,
	VENDOR_UPDATE_DETAILS,
	VENDOR_GOODS_RECEIPT,
	VENDOR_PURCHASE_ORDERS,
	VENDOR_LOGIN,
	VENDOR_QUOTATION_DETAILS,
	VENDOR_PROFILE,
	CUSTOMER_SALES
} = require('./soap_bodies.js')

const AUTH_KEY = 'Basic UE9VU0VSOmthYXIyMDIw'

module.exports = {
	vendorInvoicePost: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SI_OUT_INVOICE&interfaceNamespace=http%3A%2F%2Fdks00kaar.com%2Fvendorlogin_dks_00',
				VENDOR_INVOICE(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorCreditMemoPost: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SIOS_VENDORCM_DKS_00&interfaceNamespace=http://dks00kaar.com/vendorlogin_dks_00',
				VENDOR_CREDIT_MEMO(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorPaymentOverduesPost: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SIOS_VENDORPAYMEND_DKS_00&interfaceNamespace=http://dks00kaar.com/vendorlogin_dks_00',
				VENDOR_PAYMENT_OVERDUES(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorUpdateDetails: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SIOS_VENDORPAYMEND_DKS_00&interfaceNamespace=wsdl?p=ic/935b94afc0e73f9f9bf2feb4192b95b0',
				VENDOR_UPDATE_DETAILS(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve('There is no response')
			}).catch((error) => {
				reject(`You can't find the error`)
			})
		})
	},
	vendorGoodsReceipt: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_GR_MEKA&receiverParty=&receiverService=&interface=SI_GR_MEKA&interfaceNamespace=http://meka.com/goods_receipt',
				VENDOR_GOODS_RECEIPT(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorPurchaseOrders: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR2_DKS_00&receiverParty=&receiverService=&interface=si_out_po_req&interfaceNamespace=http://vendor.com/purchase',
				VENDOR_PURCHASE_ORDERS(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorLogin: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SIOS_VENDID_REQ_DKS_00&interfaceNamespace=http://dks00kaar.com/vendorlogin_dks_00',
				VENDOR_LOGIN(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorQuotationDetails: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_MEKA_QUOT&receiverParty=&receiverService=&interface=SI_MEKA_QUOT&interfaceNamespace=http://meka.com/vendor_quotation',
				VENDOR_QUOTATION_DETAILS(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	vendorProfile: function (reqResult) {
		return new Promise((resolve, reject) => {
			axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR_DKS_00&receiverParty=&receiverService=&interface=SIOS_GETVENDOR_DKS_00&interfaceNamespace=http://dks00kaar.com/vendorlogin_dks_00',
				VENDOR_INVOICE(reqResult), {
				headers: {
					'Authorization': AUTH_KEY,
					'Content-Type': 'text/xml'
				}
			}).then((response) => {
				resolve(response.data)
			}).catch((error) => {
				reject(error)
			})
		})
	},
	custSalesOrders	: function (reqResult) {
	return new Promise((resolve, reject) => {
		axios.post('http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_VENDOR2_DKS_00&receiverParty=&receiverService=&interface=si_sales_out&interfaceNamespace=http://salesorders.com/niha',
		CUSTOMER_SALES(reqResult), {
			headers: {
				'Authorization': AUTH_KEY,
				'Content-Type': 'text/xml'
			}
		}).then((response) => {
			resolve(response.data)
		}).catch((error) => {
			reject(error)
		})
			})
}
}
