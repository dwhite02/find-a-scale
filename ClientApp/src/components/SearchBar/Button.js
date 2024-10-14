import React from 'react';

const Button = ({ label, onClick, type = 'button', className }) => (
    <button className={className} type={type} onClick={onClick}>
        {label}
    </button>
);

export default Button;