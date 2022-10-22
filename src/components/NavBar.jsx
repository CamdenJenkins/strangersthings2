import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/Nav.module.css";

const NavBar = ({ user, setToken }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <span> {user.username}</span>
      <Link className={styles.home} to="/">
        Home
      </Link>
      <Link className={styles.profile} to='/profile'>Profile</Link>
      <Link className={styles.addpost} to="/makepost">
        Add Post
      </Link>

      {user.username === "Guest" ? (
        <>
          {""}
          <span>
            <Link className={styles.signup} to="/auth/register">
              Sign-up
            </Link>
          </span>
          <span>
            <Link className={styles.login} to="/auth/login">
              Login
            </Link>
          </span>
        </>
      ) : null}

      {user.username !== "Guest" ? (
        <span>
          <button
            className={styles.logout}
            onClick={() => {
              navigate("/auth/login");
              localStorage.removeItem("token");
              setToken("");
            }}
          >
            Log Out
          </button>
        </span>
      ) : null}
    </nav>
  );
};

export default NavBar;
