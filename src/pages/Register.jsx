import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const navigate = useNavigate();
  
  const { storeTokenInLS, API } = useAuth();
  
  const URL = `${API}/api/auth/register`;
  
  // handle Input

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle for submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      // console.log("res from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successful");
        navigate("/");
      } else {
        // Enhanced error handling
        if (response.status === 422) {
          // Handle validation errors specifically
          const errorMessage = res_data.extraDetails || res_data.message || "Validation failed. Please check your inputs.";
          toast.error(errorMessage);
          console.error("Validation error details:", res_data);
        } else {
          // Handle other errors
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-lime-50 min-h-screen flex items-center justify-center">
        <main className="bg-white max-w-5xl p-8 my-10 rounded-xl shadow-lg sm:flex">
          <div className="sm:w-1/2 mr-8 hidden sm:block">
            <img
              src="/images/register.png"
              alt="register image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Registration Form */}
          <div className="sm:w-1/2 px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-lime-500">
              Create Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="username" className="text-gray-700 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  id="username"
                  required
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  className="border p-3 rounded-lg focus:outline-none focus:border-lime-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="border p-3 rounded-lg focus:outline-none focus:border-lime-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your Phone number"
                  id="phone"
                  required
                  autoComplete="off"
                  value={user.phone}
                  onChange={handleInput}
                  className="border p-3 rounded-lg focus:outline-none focus:border-lime-500"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="border p-3 rounded-lg focus:outline-none focus:border-lime-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lime-400 text-white py-3 rounded-lg hover:bg-lime-500 transition-colors font-medium"
              >
                Register Now
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
