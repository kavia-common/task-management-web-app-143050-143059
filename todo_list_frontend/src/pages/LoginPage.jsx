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
                {/* Google */}
                <a
                  href="#!"
                  className="auth-social__btn google"
                  aria-label="Login with Google"
                  title="Login with Google"
                  onClick={(e) => e.preventDefault()}
                >
                  {/* Google 'G' multi-color mark (open source variant) */}
                  <svg
                    className="auth-social__icon"
                    viewBox="0 0 48 48"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303C33.083 32.658 28.943 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.203 6.262 29.403 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20c10.493 0 19-8.507 19-19 0-1.262-.131-2.494-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.815C14.513 16.28 18.928 12 24 12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.203 6.262 29.403 4 24 4 15.317 4 8.203 8.857 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.291 0 10.123-2.034 13.77-5.345l-6.343-5.354C29.367 34.869 26.821 36 24 36c-4.913 0-9.035-3.313-10.503-7.807l-6.59 5.082C9.691 40.611 16.391 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.089 3.05-3.38 5.465-6.576 6.798l.001-.001 6.343 5.354C37.511 39.688 40 34.333 40 28c0-1.262-.131-2.494-.389-3.917z"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#!"
                  className="auth-social__btn facebook"
                  aria-label="Login with Facebook"
                  title="Login with Facebook"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg
                    className="auth-social__icon"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.494v-9.294H9.847V11.01h2.972V8.413c0-2.938 1.793-4.543 4.417-4.543 1.255 0 2.335.093 2.648.135v3.07h-1.818c-1.426 0-1.702.679-1.702 1.674v2.261h3.403l-.444 3.696h-2.96V24h5.803C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                    />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#!"
                  className="auth-social__btn x"
                  aria-label="Login with X (Twitter)"
                  title="Login with X (Twitter)"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg
                    className="auth-social__icon"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M18.244 2h-3.774l-4.45 6.145L6.674 2H2l5.5 8.095L0 22h3.774l5.108-7.06L11.326 22H16l-6.103-8.992L18.244 2z"
                    />
                  </svg>
                </a>
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
