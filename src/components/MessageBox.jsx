import React, { useState } from "react";

const MessageBox = ({ onSend }) => {
  const [replyText, setReplyText] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleSend = () => {
    if (replyText.trim() === "") return;
    onSend(replyText, senderName);
    setReplyText("");
    setSenderName("");
  };

  return (
    <div style={{
      width: "40%",
      height: "100vh",
      padding: "16px",
      overflowY: "auto",
      fontFamily: "sans-serif",
      boxSizing: "border-box"
    }}>
      <h2 style={{ fontWeight: "bold" }}>Email subject 0 for Marketing</h2>

      <p>
        <strong>Sender 0</strong> &lt;sender0@example.com&gt; <br />
        <span style={{ fontSize: "13px", color: "#888" }}>Jul 28, 2025 at 4:11 PM</span>
      </p>

      <p style={{ marginTop: "10px" }}>
        This is the body of email 0 for Marketing. It contains some <strong>formatted text</strong> and can be quite long.
      </p>

      <div style={{
        marginTop: "20px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#f9f9f9"
      }}>
        <span style={{ fontWeight: "bold" }}>📎 PDF:</span> document-0.pdf (2.0 MB)
      </div>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Your Name (Sender)"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />

        <textarea
          rows="6"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
          placeholder="Reply..."
        ></textarea>

        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSend} style={{
            backgroundColor: "#10b981",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            marginRight: "10px",
            cursor: "pointer"
          }}>Send</button>
          <button onClick={() => {
            setReplyText("");
            setSenderName("");
          }} style={{
            backgroundColor: "#e5e7eb",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
