import React from 'react';

function Input({ onEnterClick },{onKeyPress}) {

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
            id="input-search"
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    )
}

export default Input;
