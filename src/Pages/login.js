import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data && response.data.user_id && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        window.location.href = "/dashboard";
      } else {
        console.log("Error de autenticación");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <section id="iniciar_sesion">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Iniciar Sesión</button>
      </form>

      <p>
        ¿No tenes una cuenta? <a href="/register">Registrate</a>
      </p>
    </section>
  );
}

export default Login;
