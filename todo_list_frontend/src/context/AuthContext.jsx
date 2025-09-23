import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * AuthProvider wraps the application and provides a simple local authentication state.
 * It persists the "isLoggedIn" flag in localStorage and exposes login, register and logout methods.
 */
export const AuthContext = createContext({
  isLoggedIn: false,
  // PUBLIC_INTERFACE
  login: () => {},
  // PUBLIC_INTERFACE
  register: () => {},
  // PUBLIC_INTERFACE
  logout: () => {},
});

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Manage simple local auth state with persistence. */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("isLoggedIn");
      if (saved === "true") setIsLoggedIn(true);
    } catch {
      // ignore localStorage errors in restricted environments
    }
  }, []);

  const setPersisted = (val) => {
    setIsLoggedIn(val);
    try {
      localStorage.setItem("isLoggedIn", String(val));
    } catch {
      // ignore
    }
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      login: () => setPersisted(true),
      register: () => setPersisted(true),
      logout: () => setPersisted(false),
    }),
    [isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// PUBLIC_INTERFACE
export function useAuth() {
  /**
   * This hook provides access to the authentication context.
   * Returns: { isLoggedIn: boolean, login(): void, register(): void, logout(): void }
   */
  return useContext(AuthContext);
}
