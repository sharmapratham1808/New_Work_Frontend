import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  
  const URL = `${API}/api/auth/login`;
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <main className="bg-white max-w-5xl mx-auto flex rounded-2xl shadow-lg overflow-hidden">
          {/* Left Side - Image */}
          <div className="w-1/2 hidden md:block">
            <img
              src="/images/login.webp"
              alt="login image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Login Form */}
          <div className="md:w-1/2 w-full px-8 md:px-16 py-10">
            <h1 className="font-bold text-3xl mb-8 text-lime-500 ">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-lime-500"
                />
              </div>

              <button
                type="submit"
                className="bg-lime-500 text-white py-3 rounded-lg hover:bg-lime-600 transition-colors duration-300 mt-4"
              >
                Login
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
