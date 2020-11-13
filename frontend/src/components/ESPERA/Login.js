import React from 'react';
import '../style/Login.css';

export default function Login() {
  return (
    <div className="container-login">
      <h3>Login</h3>
      <input type="text" name="email" id="email-login"/>
      <input type="password" name="senha" id="senha-login"/>

      <input className="btn-enviar" type="submit" id="btn-login" value="Login"/>
    </div>
  )
}

