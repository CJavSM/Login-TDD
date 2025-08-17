import React, { useState } from "react";
import "../Formulario.css";

const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = email === "" || password === "";

  return (
    <div className="formulario-login-full">
      <form className="formulario-login-full-form">
        <h2>Login</h2>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isDisabled}>Login</button>
      </form>
    </div>
  );
};

export default FormularioLogin;
