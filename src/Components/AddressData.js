import React from 'react';
import { InputText } from 'Components/InputText';



export const AddressData = (props) => {

    const { inputs, handleChange, className } = props;

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
                placeholder="Email"
                handleChange={(e) => handleChange({ "email": e.target.value })} />
            <InputText
                className={`${className ? className : 'w-full   py-2'} `}
                value={inputs?.phone}
                placeholder="Phone number"
                handleChange={(e) => handleChange({ "phone": e.target.value })} />
            <div className={`${className ? className : 'w-full   py-2'} `}>
                <textarea
                    className={`w-full py-2 h-24 border-copper border w-full bg-transparent rounded-3xl text-white px-5 py-2`}
                    value={inputs?.phone}
                    placeholder="Additional"
                    handleChange={(e) => handleChange({ "additional": e.target.value })} />
            
            </div>
            {/* <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-center" /> */}
        </div>
    );
};
