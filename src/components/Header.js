import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[btnNameReact , setBtnNameReact] = useState("Login")
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img
                    className="w-56"
                    src={LOGO_URL}
                    alt="Food Logo"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : { '🟢 Online' }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" 
                    onClick={() =>{
                        btnNameReact == "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login");
                        }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};


export default Header;