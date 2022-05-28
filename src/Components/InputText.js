import React from 'react';

export const InputText = (props) => {

    const { label, value, handleChange = () => { }, className, inputClassName, placeholder, type="text" } = props;

    return (
        <div className={className}>
            <input
                type={type}
                className={`${inputClassName}  border-copper border w-full bg-transparent rounded-3xl text-white px-5 py-2 placeholder-white`}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                />
        </div>
    );
};
