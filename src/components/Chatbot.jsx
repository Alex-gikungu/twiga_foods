import React, { useState } from "react";
import faqData from "../faq";  // Import the FAQ data
import "../styles/chatbot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window

  // Function to find the best-matching answer
  const getAnswer = (userQuestion) => {
    const lowerCaseInput = userQuestion.toLowerCase();
    
    // Try to find an exact match
    const exactMatch = faqData.find(faq => lowerCaseInput.includes(faq.question.toLowerCase()));
    
    if (exactMatch) return exactMatch.answer;

    return "Sorry, I don't understand that question. Please ask something else!";
  };

  // Function to send message
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");

    // Get bot response
    const botResponse = getAnswer(input);
    const botMessage = { role: "assistant", content: botResponse };

    setMessages([...newMessages, botMessage]);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button 
        className="chat-button btn btn-primary rounded-circle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-container position-fixed bottom-5 end-5 p-3 bg-light rounded shadow">
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === "user" ? "text-end" : "text-start"}>
                <p className={`p-2 rounded ${msg.role === "user" ? "bg-primary text-white" : "bg-secondary text-white"}`}>
                  {msg.content}
                </p>
              </div>
            ))}
          </div>
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control me-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
            />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
