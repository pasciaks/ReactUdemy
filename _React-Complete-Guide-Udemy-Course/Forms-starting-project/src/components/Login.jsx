import React, { useState, useRef } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const eRef = useRef();
  const pRef = useRef();

  function onChange(event) {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  function onReset() {
    console.log(eRef.current.value);
    eRef.current.value = "";
    console.log(pRef.current.value);
    pRef.current.value = "";
    //setEmail("");
    //setPassword("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    onReset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={eRef}
            onChange={onChange}
            required
            id="email"
            type="email"
            name="email"
            value={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={pRef}
            onChange={onChange}
            id="password"
            type="password"
            name="password"
            value={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="button" onClick={onReset} className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
