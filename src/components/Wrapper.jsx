import React from 'react';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';
import { UserProvider } from '../context/UserContext';
import './Wrapper.css'; 
const Wrapper = ({ }) => {
    return (
        <UserProvider>
            <Navbar />
            <div className="content"></div>
            <FormWrapper />
        </UserProvider>
    );
};

export default Wrapper;
