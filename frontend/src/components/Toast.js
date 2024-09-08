import React from "react";

const Toast = ({ message, onClose }) => {
  return (
    <div
      className="fixed top-5 right-5 bg-blue-500 text-white py-4 px-6 rounded-lg shadow-lg max-w-sm w-full z-50"
      style={{ maxWidth: '400px' }} // Adjust the width as needed
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{message}</p>
        <button
          onClick={onClose}
          className="text-xl font-bold ml-4 hover:text-gray-200"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
