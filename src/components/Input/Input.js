import React from 'react';
import './Input.css';

function Input({ onEnterClick }) {

    const [value, setValue] = React.useState('')

    const handleChange = (event) => {
        const { target: { value } } = event;
        setValue(value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onEnterClick(value)
        }
    }

    return (
        <input
            type="text"
            name="username"
            className="input-search"
            placeholder="Enter GitHub username"
            id="search"
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    )
}

export default Input;
