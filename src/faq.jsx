const faqData = [
  // Common Greetings
  {
    question: ["hello", "hi", "hey"],
    answer: "Greetings! Welcome to Twiga Foods. How may I assist you today?",
  },

  // Payment & Orders
  {
    question: ["payment", "payments", "orders", "how do I pay", "track my order"],
    answer: "I can provide information regarding payments and orders:\n\n" +
            "- We accept M-Pesa, PayPal, and credit/debit cards.\n" +
            "- To track your order, please utilize the tracking ID that was sent to your email after your purchase.\n" +
            "- Refunds are available within 7 days of purchase, subject to our terms and conditions.\n\n" +
            "If you require further assistance, please let me know!",
  },

  // Support & Contact
  {
    question: ["support", "contact", "help", "how do I contact you"],
    answer: "Certainly! You can reach our support team through the following channels:\n\n" +
            "- Email: **support@example.com**\n" +
            "- Phone: **+254 700 000 000**\n\n" +
            "We also provide:\n" +
            "- Same-day delivery in Nairobi.\n" +
            "- Nationwide delivery within 2-5 days.\n\n" +
            "Feel free to inquire if you have additional questions!",
  },

  // Working Hours
  {
    question: ["working hours", "hours", "time", "when are you open"],
    answer: "Our operational hours are as follows:\n\n" +
            "**Monday to Saturday, 8 AM - 6 PM.**\n\n" +
            "I am here to assist you during these hours!",
  },

  // Discounts
  {
    question: ["discounts", "offers", "promo", "do you have discounts"],
    answer: "Indeed, we offer seasonal discounts and special promotions. 🎉\n\n" +
            "To stay informed, consider subscribing to our newsletter for the latest updates!\n\n" +
            "If you would like more information, please do not hesitate to ask.",
  },

  // Thank You Response
  {
    question: ["thank you", "thanks", "thank you so much"],
    answer: "You are most welcome! If you have any further inquiries, please feel free to ask. Have a wonderful day!",
  },

  // Default Response
  {
    question: ["default"],
    answer: "I apologize, but I did not fully comprehend that. Could you please rephrase or ask something else? I am here to assist you!",
  },
];

/**
 * Function to find the best matching response based on user input.
 * @param {string} input - The user's input message.
 * @returns {string} - The corresponding response from the FAQ data.
 */
export function getChatbotResponse(input) {
  // Normalize the input by converting to lowercase and trimming whitespace
  input = input.toLowerCase().trim();

  // Iterate through the FAQ data to find a matching response
  for (const faq of faqData) {
    if (faq.question.some(q => input.includes(q))) {
      return faq.answer; // Return the matched answer
    }
  }

  // Default response for unrecognized input
  return faqData.find(faq => faq.question.includes("default")).answer;
}

export default faqData;