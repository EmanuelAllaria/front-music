import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL_API}api/register`, {
        name,
        email,
        password,
      });

      if (response.data && response.data.user_id && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        window.location.href = "/dashboard";
      } else {
        console.log("Error al registrarse");
      }
    } catch (error) {
      console.error("Error de registro:", error);
    }
  };

  return (
    <section id="register">
      <h1>Registrate</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Tenes una cuenta? <a href="/login">Inicia Sesión</a>
      </p>
    </section>
  );
}

export default Register;
