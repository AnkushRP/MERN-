/*import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Login.css";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const initialMode = query.get("mode") || "signin";

  const [authMode, setAuthMode] = useState(initialMode);

  // Input states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Update authMode if URL changes
  useEffect(() => {
    const mode = query.get("mode") || "signin";
    setAuthMode(mode);

    // Clear inputs when mode changes
    setFullName("");
    setEmail("");
    setPassword("");
  }, [location.search]);

  const toggleAuthMode = () => {
    const newMode = authMode === "signin" ? "signup" : "signin";
    setAuthMode(newMode);

    // Clear inputs when toggling
    setFullName("");
    setEmail("");
    setPassword("");

    // Update URL
    navigate(`/auth?mode=${newMode}`, { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation
    if (authMode === "signup" && !fullName.trim()) {
      alert("Full Name is required!");
      return;
    }
    if (!email.trim()) {
      alert("Email is required!");
      return;
    }
    if (!password.trim()) {
      alert("Password is required!");
      return;
    }

    // For now, just log the values
    console.log({ fullName, email, password, authMode });
    alert(`Submitted ${authMode}: ${email}`);

    // Clear inputs after submission
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>

          <div className="text-center">
            {authMode === "signin" ? (
              <>
                Not registered yet?{" "}
                <span className="link-primary" onClick={toggleAuthMode}>
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span className="link-primary" onClick={toggleAuthMode}>
                  Sign In
                </span>
              </>
            )}
          </div>

          {/* Full Name only for Sign Up */
 /*         {authMode === "signup" && (
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g. Jane Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          {authMode === "signin" && (
            <p className="forgot-password text-right mt-2">
              <a href="#">Forgot password?</a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Auth;
*/