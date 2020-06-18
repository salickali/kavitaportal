const express = require('express')
const bodyParser = require('body-parser')
const convert = require('xml-js')
const _ = require('lodash')

const vendorRoutes = require('./vendor/vendor.js')
const shopFloorRoutes = require('./shop_floor/shop_floor.js')
const qualityCheckRoutes = require('./quality/quality.js')
const employeeRoutes = require('./employee/employee.js')
const customerRoutes = require('./customer/customer.js')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	)
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
		return res.status(200).json({})
	}
	next()
})

app.use('/vendor', vendorRoutes)

app.use('/shopfloor', shopFloorRoutes)

app.use('/qualitycheck', qualityCheckRoutes)

app.use('/employee', employeeRoutes)

app.use('/customer',customerRoutes)

app.listen(8000, () => {
	console.log('Listening on 8000')
})
