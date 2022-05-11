import React from 'react';

export const Button = (props) => {

    return (
        <div className={`${props?.className} px-16 py-2 rounded-3xl font-bold text-base text-white border-copper border `}>
            {props?.label}
        </div>
    );
}
;
export const ButtonFilled = (props) => {

    return (
        <div className={`${props?.className} px-16 py-2 rounded-3xl font-bold text-base text-white border-copper border  bg-copper `}>
            {props?.label}
        </div>
    );
};


