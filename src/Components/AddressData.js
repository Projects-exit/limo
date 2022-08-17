import React from 'react';
import { InputText } from 'Components/InputText';
import { PhoneText } from 'Components/phoneText';

export const AddressData = (props) => {

    const { inputs, handleChange = () => {}, className } = props;

    return (
        <div className="flex  flex-wrap w-full ">
            <InputText
                className={`${className ? className : 'w-full   py-2'} `}
                value={inputs?.name}
                placeholder="Full name"
                handleChange={(e) => handleChange({ "name": e.target.value })} />
            <InputText
                className={`${className ? className : 'w-full   py-2'} `}
                value={inputs?.email}
                placeholder="example@email.com"
                handleChange={(e) => handleChange({ "email": e.target.value })} />
            <PhoneText
                className={`${className ? className : 'w-full   py-2'} `}
                value={inputs?.phone}
                placeholder="+1 (541) 754-3010"
                handleChange={(e) => handleChange({ "phone": e })} />
            <div className={`${className ? className : 'w-full   py-2'} `}>
                <textarea
                    className={`w-full py-2 h-24 border-copper border w-full bg-transparent rounded-3xl text-white px-5 py-2 placeholder-grey`}
                    value={inputs?.info}
                    placeholder="Additional"
                    onChange={(e) => handleChange({ "info": e.target.value })} />
            
            </div>
            {/* <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-center" /> */}
        </div>
    );
};
