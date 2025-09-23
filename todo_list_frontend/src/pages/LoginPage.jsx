import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/common.css";
import "../styles/login.css";
import { useAuth } from "../context/AuthContext";

/**
 * PUBLIC_INTERFACE
 * LoginPage renders the sign-in form.
 * - Uses Ocean Professional styling via common tokens and page CSS.
 * - Simulates authentication locally; on submit, sets isLoggedIn and routes to /dashboard.
 * - Provides navigation link to the Register page.
 */
export default function LoginPage() {
  const nav = useNavigate();
  const { login } = useAuth();

  const [pressed, setPressed] = useState(false);
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
    // Simulate auth success
    login();
    nav("/dashboard", { replace: true });
  };

  return (
    <div className="auth-screen login-theme">
      <div
        className="auth-bg"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/figma_image_451_862.png)`,
        }}
      />
      <div className="auth-card">
        <div className="auth-card__left">
          <h1 className="auth-title">Sign In</h1>
          <form className="auth-form" onSubmit={onSubmit}>
            <label className="auth-field">
              <span className="auth-field__label">Username</span>
              <div className="auth-field__control">
                <span className="auth-field__icon" aria-hidden="true" />
                <input
                  className="auth-input"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, username: e.target.value }))
                  }
                  required
                />
              </div>
            </label>

            <label className="auth-field">
              <span className="auth-field__label">Password</span>
              <div className="auth-field__control">
                <span className="auth-field__icon lock" aria-hidden="true" />
                <input
                  className="auth-input"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, password: e.target.value }))
                  }
                  required
                />
              </div>
            </label>

            <div className="auth-actions">
              <button
                type="button"
                className={`checkbox ${remember ? "checked" : ""}`}
                role="checkbox"
                aria-checked={remember ? "true" : "false"}
                onClick={() => setRemember((v) => !v)}
              >
                <span className="checkbox__box" />
                <span className="checkbox__label">Remember Me</span>
              </button>

              <button
                type="submit"
                data-role="login-button"
                className={`btn primary ${pressed ? "pressed" : ""}`}
                aria-label="Login"
              >
                Login
              </button>
            </div>

            <div className="auth-social">
              <span className="auth-social__text">Or, Login with</span>
              <div className="auth-social__icons">
                <a href="#!" className="circle google" aria-label="Login with Google" />
                <a href="#!" className="circle facebook" aria-label="Login with Facebook" />
                <span className="circle other" aria-hidden="true" />
              </div>
            </div>

            <p className="auth-footnote">
              Don’t have an account?{" "}
              <Link className="auth-link" to="/register">
                Create One
              </Link>
            </p>
          </form>
        </div>
        <div
          className="auth-card__right"
          role="img"
          aria-label="Illustration"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/figma_image_449_1409.png)`,
          }}
        />
      </div>
    </div>
  );
}
