import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/common.css";
import "../styles/register.css";
import { useAuth } from "../context/AuthContext";

/**
 * PUBLIC_INTERFACE
 * RegisterPage renders the sign-up form.
 * - Uses Ocean Professional styling via tokens and page CSS.
 * - Simulates account creation locally; on submit, sets isLoggedIn and routes to /dashboard.
 * - Provides navigation link back to the Login page.
 */
export default function RegisterPage() {
  const nav = useNavigate();
  const { register } = useAuth();

  const [pressed, setPressed] = useState(false);
  const [terms, setTerms] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!terms) {
      // basic inline feedback
      alert("Please agree to all terms to continue.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setPressed(true);
    setTimeout(() => setPressed(false), 150);
    register();
    nav("/dashboard", { replace: true });
  };

  return (
    <div className="auth-screen register-theme">
      <div
        className="auth-bg reg"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/figma_image_451_861.png)`,
        }}
      />
      <div className="auth-card reverse">
        <div
          className="auth-card__left image"
          role="img"
          aria-label="Illustration"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/figma_image_449_1486.png)`,
          }}
        />
        <div className="auth-card__right">
          <h1 className="auth-title">Sign Up</h1>
          <form className="auth-form" onSubmit={onSubmit}>
            <div className="grid two">
              <label className="auth-field">
                <span className="auth-field__label">First Name</span>
                <div className="auth-field__control">
                  <span className="auth-field__icon name" aria-hidden="true" />
                  <input
                    className="auth-input"
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    required
                  />
                </div>
              </label>
              <label className="auth-field">
                <span className="auth-field__label">Last Name</span>
                <div className="auth-field__control">
                  <span className="auth-field__icon name" aria-hidden="true" />
                  <input
                    className="auth-input"
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    required
                  />
                </div>
              </label>
            </div>

            <label className="auth-field">
              <span className="auth-field__label">Username</span>
              <div className="auth-field__control">
                <span className="auth-field__icon user" aria-hidden="true" />
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
              <span className="auth-field__label">Email</span>
              <div className="auth-field__control">
                <span className="auth-field__icon email" aria-hidden="true" />
                <input
                  className="auth-input"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                />
              </div>
            </label>

            <div className="grid two">
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
              <label className="auth-field">
                <span className="auth-field__label">Confirm Password</span>
                <div className="auth-field__control">
                  <span className="auth-field__icon lock" aria-hidden="true" />
                  <input
                    className="auth-input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, confirmPassword: e.target.value }))
                    }
                    required
                  />
                </div>
              </label>
            </div>

            <div className="auth-actions">
              <button
                type="button"
                className={`checkbox ${terms ? "checked" : ""}`}
                role="checkbox"
                aria-checked={terms ? "true" : "false"}
                onClick={() => setTerms((v) => !v)}
              >
                <span className="checkbox__box" />
                <span className="checkbox__label">I agree to all terms</span>
              </button>

              <button
                type="submit"
                data-role="register-button"
                className={`btn primary ${pressed ? "pressed" : ""}`}
                aria-label="Register"
              >
                Register
              </button>
            </div>

            <p className="auth-footnote">
              Already have an account?{" "}
              <Link className="auth-link" to="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
