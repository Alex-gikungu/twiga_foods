// // server.mjs
// import express from 'express';
// // import stkPush from './stk_push.js';
// import { sendStkPush } from './stk_push.js'; // Import the sendStkPush function from stkPush.js

// const app = express();
// const port = 3000;

// // Middleware to parse JSON request body
// app.use(express.json());

// // POST endpoint to trigger STK Push
// app.post('/api/stk-push', async (req, res) => {
//   const { amount, phone } = req.body;

//   if (!amount || !phone) {
//     return res.status(400).json({ message: 'Amount and phone number are required' });
//   }

//   try {
//     // Call sendStkPush function
//     const response = await sendStkPush(amount, phone);

//     // Respond with the response from STK Push API
//     return res.status(200).json(response);
//   } catch (error) {
//     console.error('Error initiating M-Pesa STK Push:', error);
//     return res.status(500).json({ message: 'Error initiating M-Pesa STK Push', error: error.message });
//   }
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
