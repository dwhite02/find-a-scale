import React from 'react';

const TextInput = ({ name, value, placeholder, onChange, error }) => (
    <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default TextInput;