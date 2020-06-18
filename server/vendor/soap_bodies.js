function VENDOR_INVOICE(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
		<urn:ZFM_VENDOR_INVOICE>
			<!--You may enter the following 2 items in any order-->
			<LIFNR>${reqResult.lifnr}</LIFNR>
			${reqResult.matnr && `<MATNR>${reqResult.matnr}</MATNR>`}
		</urn:ZFM_VENDOR_INVOICE>
	</soapenv:Body>
	</soapenv:Envelope>`
}

function VENDOR_CREDIT_MEMO(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
	<soapenv:Header/>
	<soapenv:Body>
		<urn:BAPI_VENDORCREDITMEMODKS00>
			<LIFNR>${reqResult.lifnr}</LIFNR>
		</urn:BAPI_VENDORCREDITMEMODKS00>
	</soapenv:Body>
	</soapenv:Envelope>
	`
}

function VENDOR_PAYMENT_OVERDUES(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
		<urn:BAPI_VENPAY2DKS>
			<LIFNR>${reqResult.lifnr}</LIFNR>
		</urn:BAPI_VENPAY2DKS>
	</soapenv:Body>
	</soapenv:Envelope>`
}

function VENDOR_UPDATE_DETAILS(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:BAPI_VENDOR_DKS00>
      <LIFNR>${reqResult.lifnr}</LIFNR>
      <NAME>${reqResult.NAME}</NAME>
      <AGE>${reqResult.age}</AGE>
         <ADDRESS>${reqResult.address}</ADDRESS>
         
         <BANKL>${reqResult.bankl}</BANKL>
         <ITEMS>${reqResult.items}</ITEMS>
         
      </urn:BAPI_VENDOR_DKS00>
   </soapenv:Body>
</soapenv:Envelope>`
}

function VENDOR_GOODS_RECEIPT(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZBAPI_KMM_FM002>
         <LIFNR>${reqResult.lifnr}</LIFNR>
      </urn:ZBAPI_KMM_FM002>
   </soapenv:Body>
</soapenv:Envelope>
`
}

function VENDOR_PURCHASE_ORDERS(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZBAPI_DISPLAY_PO>
         <!--You may enter the following 8 items in any order-->
         <BUKRS>${reqResult.bukrs}</BUKRS>
      </urn:ZBAPI_DISPLAY_PO>
   </soapenv:Body>
</soapenv:Envelope>`
}

function VENDOR_LOGIN(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ven="http://dks00kaar.com/vendorlogin_dks_00">
   <soapenv:Header/>
   <soapenv:Body>
      <ven:MT_VENDID_REQ_DKS_00>
         <VENDID>${reqResult.username}</VENDID>
         <PWD>${reqResult.password}</PWD>
      </ven:MT_VENDID_REQ_DKS_00>
   </soapenv:Body>
</soapenv:Envelope>`
}

function VENDOR_QUOTATION_DETAILS(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZBAPI_KMM_FM006>
         <EBELN>${reqResult.ebeln}</EBELN>
      </urn:ZBAPI_KMM_FM006>
   </soapenv:Body>
</soapenv:Envelope>`
}

function VENDOR_PROFILE(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:BAPI_VENDOR_DISPLAY>
         <VENDORNO>${reqResult.lifnr}</VENDORNO>
      </urn:BAPI_VENDOR_DISPLAY>
   </soapenv:Body>
</soapenv:Envelope>`
}

function CUSTOMER_SALES(reqResult) {
	return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSALESORDER_DISPLAY1>

          <MATNR>${reqResult.matnr}</MATNR>

       </urn:ZSALESORDER_DISPLAY1>
    </soapenv:Body>
 </soapenv:Envelope>`
}
module.exports = {
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
}
