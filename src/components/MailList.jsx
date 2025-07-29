import React from "react";

const MailList = ({ emails, onSearch }) => {
  return (
    <div style={{
      width: "40%",
      height: "100vh",
      borderRight: "1px solid #ddd",
      padding: "16px",
      overflowY: "auto",
      boxSizing: "border-box",
      fontFamily: "sans-serif"
    }}>
      <input
        type="text"
        placeholder="Search emails..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      {emails.map((email, index) => (
        <div key={index} style={{
          backgroundColor: email.highlight ? "#e6fdf6" : "#fff",
          border: "1px solid #eee",
          borderLeft: email.highlight ? "4px solid #10b981" : "none",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px"
        }}>
          <div style={{ fontWeight: "bold", color: "#b91c1c" }}>{email.sender}</div>
          <div style={{ fontWeight: "bold" }}>{email.subject}</div>
          <div style={{ color: "#666", fontSize: "14px" }}>{email.preview}</div>
          <div style={{ fontSize: "12px", textAlign: "right" }}>{email.time}</div>
        </div>
      ))}
    </div>
  );
};

export default MailList;
