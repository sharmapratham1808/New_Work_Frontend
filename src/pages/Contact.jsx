import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle form get submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          ...contact,
          message: "",
        });
        // const data = await response.json()
        // console.log(data);
        toast.success("message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 py-8 px-4 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-lime-500">
              Send Us A Message
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="/images/contact.png"
                alt="contact image"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>

          <section className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  id="username"
                  autoComplete="off"
                  required
                  value={contact.username}
                  onChange={handleInput}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  autoComplete="off"
                  required
                  value={contact.email}
                  onChange={handleInput}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter a Message..."
                  autoComplete="off"
                  required
                  value={contact.message}
                  onChange={handleInput}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-lime-600 text-white py-2 px-4 rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>

          <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5631469379623!2d80.27386157488085!3d26.502007077620828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c382405555555%3A0xc56ecc1df489e865!2sDr.%20Ambedkar%20Institute%20of%20Technology%20for%20Divyangjan!5e0!3m2!1sen!2sin!4v1742984276909!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
