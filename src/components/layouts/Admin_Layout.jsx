import React, { useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaRegListAlt, FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

const Admin_Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <header className="bg-gray-800 text-white w-full md:w-64 md:min-h-screen relative shadow-lg">
        <div className="p-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-full flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xl">☰</span>
            <span className="font-medium">Menu</span>
          </button>

          {/* Navigation */}
          <nav 
            className={`${
              isOpen ? "block" : "hidden"
            } md:block transition-all duration-300 ease-in-out`}
          >
            <ul className="space-y-3 mt-4">
              {/* Users Link */}
              <li>
                <NavLink
                  to="/admin/users"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 
                    transition-all duration-200 ${isActive ? "bg-gray-700 shadow-md" : ""}`
                  }
                >
                  <FaUser className="text-xl" />
                  <span className="font-medium">Users</span>
                </NavLink>
              </li>

              {/* Contacts Link */}
              <li>
                <NavLink
                  to="/admin/contacts"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 
                    transition-all duration-200 ${isActive ? "bg-gray-700 shadow-md" : ""}`
                  }
                >
                  <FaMessage className="text-xl" />
                  <span className="font-medium">Contacts</span>
                </NavLink>
              </li>

              {/* Services Link */}
              <li>
                <NavLink
                  to="/admin/services"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 
                    transition-all duration-200 ${isActive ? "bg-gray-700 shadow-md" : ""}`
                  }
                >
                  <FaRegListAlt className="text-xl" />
                  <span className="font-medium">Services</span>
                </NavLink>
              </li>

              {/* Home Link */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 
                    transition-all duration-200 ${isActive ? "bg-gray-700 shadow-md" : ""}`
                  }
                >
                  <FaHome className="text-xl" />
                  <span className="font-medium">Home</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 min-h-screen">
        {/* Welcome Message */}
        <div className="p-6 md:p-8 lg:p-10">
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-200">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
                Welcome To Admin Panel
              </h1>
            </div>
          </div>

          {/* Outlet Content */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin_Layout;
