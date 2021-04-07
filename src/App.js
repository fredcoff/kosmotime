import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState("Form is Incomplete!");

  return (
    <div>
      <Form setMessage={setMessage}></Form>
      <Message message={message}></Message>
    </div>
  );
}

export default App;
