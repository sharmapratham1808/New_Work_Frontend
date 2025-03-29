import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin_Update = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const { authorizationToken, API } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setData(userData);
      } else {
        toast.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error loading user data");
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated Successfully");
        navigate("/admin/users"); // Redirect after successful update
      } else {
        toast.error("Update Failed");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-3xl">
        {/* Responsive Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Update User Data
        </h1>

        {/* Form Card */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Username Field */}
            <div>
              <label 
                htmlFor="username" 
                className="block text-gray-700 text-sm sm:text-base font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         text-sm sm:text-base transition-colors"
                required
                autoComplete="off"
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-gray-700 text-sm sm:text-base font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         text-sm sm:text-base transition-colors"
                required
                autoComplete="off"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-gray-700 text-sm sm:text-base font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={data.phone}
                onChange={handleInput}
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         text-sm sm:text-base transition-colors"
                required
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[150px] bg-blue-500 text-white 
                         px-6 py-2.5 rounded-lg hover:bg-blue-600 
                         text-sm sm:text-base font-medium
                         transition-colors duration-200 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admin_Update;
