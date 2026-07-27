import React, { useState } from "react";
import { Link } from "react-router-dom";
import aiReplies from "../data/aiReplies";

function AIChatbot() {

  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState({
    text: "Hi 👋 How can I help you?",
    link: "",
    linkText: "",
  });

  const handleAsk = () => {

    const text = question.toLowerCase();

    const result = aiReplies.find((item) =>
      item.keywords.some((word) => text.includes(word))
    );

    if (result) {
      setAnswer({
        text: result.reply,
        link: result.link || "",
        linkText: result.linkText || "",
      });
    } else {
      setAnswer({
        text: "🤖 Sorry, I couldn't understand. Ask me about movies, booking, offers or gift cards.",
        link: "",
        linkText: "",
      });
    }

    setQuestion("");
  };

  return (
    <div className="chatbot">

      <button className="chat-btn" onClick={() => setOpen(!open)}>🤖 AI</button>

      {open && (
        <div className="chat-box">

          <h3>ShowTime AI</h3>

          <p>{answer.text}</p>

          {answer.link && <Link className="chat-link" to={answer.link}>{answer.linkText}</Link>}

          <input type="text" placeholder="Ask anything..." value={question} onChange={(e) => setQuestion(e.target.value)} />

          <button onClick={handleAsk}>Send</button>

        </div>
      )}

    </div>
  );
}

export default AIChatbot;