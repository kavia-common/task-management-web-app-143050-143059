import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/common.css";
import "../styles/dashboard.css";
import { useAuth } from "../context/AuthContext";

/**
 * PUBLIC_INTERFACE
 * DashboardPage renders a simple dashboard styled to match the Ocean Professional theme.
 * It includes:
 * - Top header with title and action buttons (Logout)
 * - User info panel (placeholder)
 * - Todo list area (placeholder)
 */
export default function DashboardPage() {
  const { logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1 className="dash-title">Ocean Tasks</h1>
        <div className="dash-actions">
          <button type="button" className="btn ghost">New Task</button>
          <button type="button" className="btn warn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="dash-main">
        <section className="panel user">
          <h2 className="panel-title">Welcome back</h2>
          <p className="panel-desc">User info will appear here.</p>
        </section>

        <section className="panel todos">
          <div className="panel-header">
            <h2 className="panel-title">Your Todos</h2>
            <div className="filters">
              <button className="chip active">All</button>
              <button className="chip">Active</button>
              <button className="chip">Completed</button>
            </div>
          </div>

          <div className="todo-list">
            <div className="todo-card placeholder">
              <div className="todo-title">Add your first task</div>
              <div className="todo-desc">
                This is a placeholder for your todo list. Integrate with your
                backend when ready.
              </div>
              <button className="btn secondary">Add Task</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
