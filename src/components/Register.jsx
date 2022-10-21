import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser, registerUser } from "../api/auth";
import useAuth from "../hooks/useAuth";
import styles from "../styles/Form.module.css";

const Register = ({ setToken }) => {
  const { method } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className={styles.form}>
      <form
        id={styles.auth}
        className="pure-form pure-form-stacked"
        onSubmit={async (event) => {
          event.preventDefault();

          let result;

          if (method === "register") {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }
          console.log(result);
          console.log({ username, password });

          if (result.success) {
            const token = result.data.token;
            localStorage.setItem("token", token);
            setToken(token);
            setPassword("");
            setUsername("");
            navigate("/");
          } else {
            setError(result.error.message);
          }
        }}
      >
        <input
          className={styles.username}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        />
        <input
          className={styles.password}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="password"
        />
        <button
          id={styles.button}
          className="pure-button pure-button-primary"
          type="submit"
        >
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Register;
