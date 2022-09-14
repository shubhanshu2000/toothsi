import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="flex justify-around p-4 bg-blue-200">
        <Link to="/">Products</Link>
        <Link to="/cart"> Cart</Link>
      </nav>
    </>
  );
};

export default Navigation;
