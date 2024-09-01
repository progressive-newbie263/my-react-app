import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  //for storing email :
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //other re option;
    //const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //yeah i have no clue what this regex part does xD
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!re.test(email.toLowerCase())) {
      setErrorVisible(true);
      setSuccessVisible(false);
    } else {
      setErrorVisible(false);
      setSuccessVisible(true);
      setSubmittedEmail(email);
    }
    //so there is a problem here. on submitting the email, the email will
    //return an empty string. so with this "setEmail" on, you can't return a 
    //message with given email address
    setEmail(""); //user won't have to delete email to click a new one
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="input"
        name="Email"
        value={email}
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        style={{
          borderColor: errorVisible ? "red" : "hsl(0, 36%, 70%)", //desaturated red for this
        }}
      />

      {/* return message in red text */}
      {errorVisible && (
        <p id="error-text" style={{ display: "block", color: "red" }}>
          Please provide a valid email
        </p>
      )}

      {/* for error icon (red exclaim mark) */}
      {errorVisible && (
        <div id="icon-error" style={{ display: "block", color: "red" }}>
          <img src="./src/images/icon-error.svg" alt="icon-error" />
          {/*
            alternate error: 
            &#x26A0; 
          */}
        </div>
      )}

      <button id="button" type="submit">
        <img src="./src/images/icon-arrow.svg" alt="icon-arrow" />
      </button>

      {/* return message in green text (successful) */}
      {successVisible && (
        <p id="success-text" style={{ display: "block", color: "green" }}>
          Thank you for choosing our service, {submittedEmail}!
        </p>
      )}

      {successVisible && (
        <div id="icon-error" style={{ display: "block" }}>
          &#x2705; {/* correct icon */}
        </div>
      )}
    </form>
  );
}

export default Form;
