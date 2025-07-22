import React from 'react';

const CurrencySelector = ({ onChange }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <select name="currency" id="currency" onChange={handleChange}>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="brl">BRL</option>
        </select>
    );
};

export default CurrencySelector;
