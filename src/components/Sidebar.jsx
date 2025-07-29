import React from "react";

const Sidebar = ({ onInboxClick }) => {
  return (
    <div style={{
      width: "20%",
      height: "100vh",
      borderRight: "1px solid #ddd",
      padding: "16px",
      boxSizing: "border-box",
      fontFamily: "sans-serif",
    }}>
      <button style={{
        backgroundColor: "#22c55e",
        color: "#fff",
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        cursor: "pointer",
        marginBottom: "20px"
      }}>Compose</button>

      <div>
        <h4 style={{ fontSize: "13px", color: "#444", marginBottom: "10px" }}>ALL ACCOUNTS</h4>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", color: "#333" }}>
          <li style={{ marginBottom: "8px", cursor: "pointer" }} onClick={onInboxClick}>
            📥 Inbox <span style={{ float: "right", color: "#0f0" }}>15</span>
          </li>
          <li style={{ marginBottom: "8px" }}>📤 Sent</li>
          <li style={{ marginBottom: "8px" }}>📝 Drafts</li>
          <li style={{ marginBottom: "8px" }}>🗑 Trash</li>
          <li style={{ marginBottom: "8px" }}>⚠️ Spam</li>
          <li style={{ marginBottom: "8px" }}>📁 Archive</li>
          <li style={{ marginBottom: "8px" }}>⭐ Starred</li>
        </ul>

        <h4 style={{ fontSize: "13px", marginTop: "20px", color: "#444" }}>ACCOUNTS</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "6px" }}>🟥 John Doe <span style={{ float: "right" }}>12</span></li>
          <li style={{ marginBottom: "6px" }}>🟦 Marketing <span style={{ float: "right" }}>5</span></li>
          <li style={{ marginBottom: "6px" }}>🟨 Customer Support <span style={{ float: "right" }}>28</span></li>
        </ul>
      </div>

      <button style={{
        marginTop: "20px",
        padding: "8px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        borderRadius: "4px",
        cursor: "pointer",
        width: "100%"
      }}>+ Add Account</button>
    </div>
  );
};

export default Sidebar;
