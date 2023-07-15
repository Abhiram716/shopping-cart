import { AiFillShopping } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>Welcome to Shopping.com</h1>
        <div className="nav-container">
          <Link to="/">
            <button>
              <h1>Home</h1>
            </button>
          </Link>
          <Link to="/Cart">
            <button>
              <h1>
                <AiFillShopping />
              </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
