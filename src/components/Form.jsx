import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Form = () => {
    const { name, setName } = useContext(UserContext);

    return (
        <div>
            <label>Your Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default Form;
