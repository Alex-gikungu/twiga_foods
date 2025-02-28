// // stkPush.js
// const axios = require('axios');
// const base64 = require('base-64'); // Make sure to install this if you don't have it: npm install base-64

// async function sendStkPush(amount, phone) {
//   const token = await generateToken();
//   const date = new Date();
//   const timestamp =
//     date.getFullYear() +
//     ("0" + (date.getMonth() + 1)).slice(-2) +
//     ("0" + date.getDate()).slice(-2) +
//     ("0" + date.getHours()).slice(-2) +
//     ("0" + date.getMinutes()).slice(-2) +
//     ("0" + date.getSeconds()).slice(-2);

//   const shortCode = 174379; // sandbox shortcode, replace with your live shortcode in production
//   const consumerKey = '';
//   const consumerSecret = '';

//   const passkey = base64.encode(consumerSecret);
//   const stk_password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");

//   const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"; // change to live URL for production
  
//   const headers = {
//     'Authorization': 'Bearer ' + token,
//     'Content-Type': 'application/json'
//   };

//   const requestBody = {
//     BusinessShortCode: shortCode,
//     Password: stk_password,
//     Timestamp: timestamp,
//     TransactionType: "CustomerPayBillOnline",
//     Amount: amount,
//     PartyA: `254${phone}`,
//     PartyB: shortCode,
//     PhoneNumber: `254${phone}`,
//     CallBackURL: "https://yourwebsite.co.ke/callbackurl", // Replace with your actual callback URL
//     AccountReference: `254${phone}`,
//     TransactionDesc: "Payment Description",
//   };

//   try {
//     const response = await axios.post(url, requestBody, { headers });
//     return response.data;
//   } catch (error) {
//     console.error('Error initiating M-Pesa STK Push:', error);
//     throw error;
//   }
// }

// async function generateToken() {
//   // Implementation for token generation (can be done using Safaricom's API)
//   // This token is required for authentication on the STK Push API
// }

// module.exports = { sendStkPush };
