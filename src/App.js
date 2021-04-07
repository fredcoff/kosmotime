import React, { useState } from "react";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState("Form is Incomplete!");

  const isFormValid = (valid) => {
    if (valid) {
      setMessage("Form is Complete!");
    } else {
      setMessage("Form is Incomplete!");
    }
  };

  return (
    <div>
      <Form isFormValid={isFormValid}></Form>
      <Message message={message}></Message>
    </div>
  );
}

export default App;
