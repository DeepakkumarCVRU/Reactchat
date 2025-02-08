import { useState } from "react";

export default function Chatbots() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? for  issue enter key 1.   For service enter 2. explorer our compony enter 3. chat Exit enter key 4.  " , sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    
    console.log(input);
    if (input === "1") {
      const botResponse = { text: "https://einfratechsys.com/contact/index.html  contact us our team", sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
    } else if (input === "2") {
      const botResponse = { text: "for service go here https://einfratechsys.com/index.html", sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
    } else if (input === "3") {
      const botResponse = { text: "https://einfratechsys.com/about/index.html  explorer our componey", sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
    }
    
    
    else if (input === "4") {
      const botResponse = { text: "Thank you for chatting with me! 😊", sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
      setTimeout(() => {
        setMessages([{ text: " How can I assist you today? for  issue enter key 1.   For service enter 2. explorer our compony enter 3. chat Exit enter key 4.  ", sender: "bot" }]);
      }, 3000);
      return;
    }else{
      setTimeout(() => {
      const botResponse = { text: "I'm just a simple bot! 😊 please enter right key 😊", sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  }
};

  return (
    <div className="flex flex-col w-full max-w-md mx-auto   bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="bg-green-500 text-white text-lg font-semibold p-4">Chatbot</div>
      <div className="flex flex-col p-4 space-y-2 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-lg focus:outline-none"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
      </div>
    </div>
  );
}
