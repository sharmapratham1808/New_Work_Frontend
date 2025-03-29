import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Admin_Contacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getContactData();
        toast.success("Contact Deleted Successfully");
      } else {
        toast.error("Contact Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        {/* Responsive Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          Admin Contact Data
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {contactData.map((currContactData, index) => {
            const { username, email, message, _id } = currContactData;
            return (
              <div
                key={_id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Card Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                    {username}
                  </h2>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Email:
                    </label>
                    <p className="text-gray-800 break-all text-sm sm:text-base">
                      {email}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">
                      Message:
                    </label>
                    <p className="text-gray-800 text-sm sm:text-base whitespace-pre-wrap">
                      {message}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={() => deleteContactById(_id)}
                      className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white 
                               rounded hover:bg-red-600 transition-colors duration-200
                               text-sm sm:text-base font-medium
                               focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Delete Contact
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {contactData.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            <p className="text-lg">No contacts found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin_Contacts;
