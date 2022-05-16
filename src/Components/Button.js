import React from 'react';

export const Button = (props) => {

    return (
        <div 
            onClick={props.onClick}
            className={`${props?.className} px-5 py-2 rounded-3xl font-bold text-base text-white border-copper border cursor-pointer`}>
            {props?.label}
        </div>
    );
}
;
export const ButtonFilled = (props) => {

    return (
        <div 
            onClick={props.onClick}
            className={`${props?.className} px-5 py-2 rounded-3xl font-bold text-base text-white border-copper border  bg-copper cursor-pointer`}>
            {props?.label}
        </div>
    );
};


