import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  try {
    const response = await axios.post(
      "https://zerodha-backend-6g46.onrender.com/login",
      {
        email,
        password
      }
    );

    alert(response.data.message);
    window.location.href = "https://zerodha-clone-swart-seven.vercel.app/holdings";

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message || "Login failed"
    );
  }
};

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card p-4 shadow-sm">
            
            <h2 className="text-center mb-4">
              Login to Zerodha
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                    name="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-3">
              Don't have an account?{" "}
              <Link to="/signup">
                Sign up
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;