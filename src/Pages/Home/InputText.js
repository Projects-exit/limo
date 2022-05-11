import React from 'react';

export const InputText = (props) => {

    const { label, value, handleChange = () => { }, className, inputClassName } = props;

    return (
        <div className={className}>
            <input
                type="text"
                className={`${inputClassName}  border-copper border w-full bg-transparent rounded-3xl text-white px-5 py-2`}
                value={value}
                onChange={handleChange} />
        </div>
    );
};
