import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MailList from "./components/MailList";
import MessageBox from "./components/MessageBox";

const initialEmails = [
  {
    sender: "Sender 0",
    subject: "Email subject 0 for Marketing",
    preview: "This is the body of email 0 for Marketing...",
    time: "16:11",
    highlight: true,
  },
  {
    sender: "Sender 1",
    subject: "Email subject 1 for John Doe",
    preview: "This is the body of email 1 for John Doe...",
    time: "15:11",
  },
];

const App = () => {
  const [emails, setEmails] = useState(initialEmails);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmails, setFilteredEmails] = useState(initialEmails);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    setFilteredEmails(
      emails.filter(
        (email) =>
          email.sender.toLowerCase().includes(query) ||
          email.subject.toLowerCase().includes(query) ||
          email.preview.toLowerCase().includes(query)
      )
    );
  }, [searchQuery, emails]);

  const addReply = (text, senderName) => {
    const newEmail = {
      sender: senderName || "You",
      subject: "Re: Email subject 0 for Marketing",
      preview: text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      highlight: false,
    };
    setEmails([newEmail, ...emails]);
  };

  const showInbox = () => {
    setFilteredEmails(emails);
    setSearchQuery("");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onInboxClick={showInbox} />
      <MailList emails={filteredEmails} onSearch={setSearchQuery} />
      <MessageBox onSend={addReply} />
    </div>
  );
};

export default App;
