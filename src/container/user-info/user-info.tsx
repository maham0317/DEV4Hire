import React from "react";
import Navbar from "../../components/header/navbar";

const UserProfile = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-12 py-6 mt-5">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          User Profile
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <p className="text-gray-900 text-sm">Jane Doe</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <p className="text-gray-900 text-sm">User Role</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm font-semibold mb-2"
            htmlFor="contact"
          >
            Contact
          </label>
          <p className="text-gray-900 text-sm">
            Phone:{" "}
            <a href="tel:+123456789" className="text-blue-600">
              123-456-789
            </a>
            <br />
            Email:{" "}
            <a href="mailto:jane@example.com" className="text-blue-600">
              jane@example.com
            </a>
          </p>
        </div>
        <div className="flex">
          <button className="bg-[#332c55] hover:bg-blue-600 text-white text-sm py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
