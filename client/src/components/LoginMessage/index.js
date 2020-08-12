import React from "react";
import "./style.css";

function LoginMessage(props) {
  return (
    <div
      className="uk-text-center page-title"
      style={{
        paddingTop: 140,
        paddingBottom: 70,
      }}
    >
      <h1 className="text">You must be logged in to view this content</h1>
      <p className="text">
        If you are already have an account, please{" "}
        <a href="/login">login here.</a>
        <br />
        If you don't have an account, you can{" "}
        <a href="/signup">sign up here.</a>
      </p>
    </div>
  );
}

export default LoginMessage;
