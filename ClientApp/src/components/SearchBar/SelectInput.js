import React from 'react';

const SelectInput = ({ name, value, options, onChange, error }) => (
    <select
        className={`form-select ${error ? 'is-invalid' : ''}`}
        name={name}
        value={value}
        onChange={onChange}
    >
        {options.map(option => (
            <option key={option.value} value={option.value}> {option.label} </option>
        ))}
    </select>
);

export default SelectInput;