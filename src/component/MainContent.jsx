import React from "react";
import Form from "./Form.jsx";

function MainContent() {

  return (
    <>
      <div className="logo">
        <img src="/src/images/logo.svg" alt="base-logo" />
      </div>

      <div className="container">
        <div className="content">
          <h1>
            WE'RE 
            <br/>
            <span>COMING <br/> SOON</span>
          </h1>

          <p>
            Hello fellow shoppers! We're currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our
            launch deals.
          </p>
          
          <Form />
        </div>

        <div className="user"></div>
      </div>
    </>
  )
}

export default MainContent