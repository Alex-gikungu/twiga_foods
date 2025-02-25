import React, { useState } from "react";
import axios from "axios";
import "../styles/chatbot.css"; 

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window

  // Function to send message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = { role: "assistant", content: response.data.choices[0].message.content };
      setMessages([...newMessages, botMessage]);

    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
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
