import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './Navbar.css'; 

const Navbar = () => {
    const { name } = useContext(UserContext);

    return (
        <div className="navbar">
            Hi {name}!
        </div>
    );
};

export default Navbar;
