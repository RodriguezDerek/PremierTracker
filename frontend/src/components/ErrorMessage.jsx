import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="text-center text-red-600 bg-red-100 p-4 rounded-md mt-4 mx-auto w-[90%] max-w-xl">
      <p className="font-semibold">Error:</p>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
