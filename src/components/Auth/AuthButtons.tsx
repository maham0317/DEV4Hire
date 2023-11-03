import React from 'react';
import { Link } from 'react-router-dom';

function AuthButtons() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="space-x-4 mb-4">
        <Link to="/login" className="button">
          Go to Login
        </Link>
        <Link to="/register" className="button">
          Go to Registration
        </Link>
      </div>
      <div>
        <img src="assets/images/auth.jpg" alt="Your Image" className="w-96 h-auto" />
      </div>
    </div>
  );
}

export default AuthButtons;
