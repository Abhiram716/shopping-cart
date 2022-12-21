import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
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
                                <FontAwesomeIcon icon={faBagShopping} />
                            </h1>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


