import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
const ErrorAlert = ({ message, onClose }) => {
  return (
    //TODO fix this ugly error alert
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-red-500 text-white rounded-lg p-6 w-80 h-48 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Error</h2>
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={onClose}
          >
            <LockClosedIcon
              className="
                h-16
                w-16
              "
            />
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorAlert;
