import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Admin_Users = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();
  const navigate = useNavigate();

  const getAllUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log("User Successfully Deleted");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/users/${id}/edit`);
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-4 sm:py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Admin Users Data
          </h1>
        </div>
        
        {/* Mobile View: Card Layout */}
        <div className="block sm:hidden">
          {users.map((currUser, index) => {
            const { username, email, phone, _id } = currUser;
            return (
              <div 
                key={_id} 
                className="bg-white rounded-lg shadow-md mb-4 p-4"
              >
                <div className="mb-2">
                  <label className="font-semibold text-gray-600">Name:</label>
                  <p className="text-gray-800">{username}</p>
                </div>
                <div className="mb-2">
                  <label className="font-semibold text-gray-600">Email:</label>
                  <p className="text-gray-800 break-all">{email}</p>
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-gray-600">Phone:</label>
                  <p className="text-gray-800">{phone}</p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(_id)}
                    className="bg-blue-500 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(_id)}
                    className="bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Table Layout */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left hidden md:table-cell">Email</th>
                <th className="py-3 px-4 text-left hidden lg:table-cell">Phone</th>
                <th className="py-3 px-4 text-center w-32 md:w-40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, index) => {
                const { username, email, phone, _id } = currUser;
                return (
                  <tr
                    key={_id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="py-2 px-4">{username}</td>
                    <td className="py-2 px-4 hidden md:table-cell">
                      <span className="truncate block max-w-xs">{email}</span>
                    </td>
                    <td className="py-2 px-4 hidden lg:table-cell">{phone}</td>
                    <td className="py-2 px-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleEdit(_id)}
                          className="bg-blue-500 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteUser(_id)}
                          className="bg-red-500 text-white px-3 py-1.5 rounded text-sm hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Admin_Users;
