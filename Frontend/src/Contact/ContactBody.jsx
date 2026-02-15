


import React from "react";

const ContactBody = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-12 flex items-center justify-center min-h-screen">
      
      <form 
        onSubmit={handleSubmit}
        className="w-full mt-30 max-w-md bg-white p-8 rounded-xl shadow-2xl border"
      >
        <h1 className="text-3xl font-semibold text-center mb-6">
          Contact Us
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
        <div>
          
        </div>

      </form>
    </div>
  );
};

export default ContactBody;
