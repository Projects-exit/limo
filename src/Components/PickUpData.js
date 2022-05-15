import React from 'react';
import { InputText } from 'Components/InputText';



export const PickUpData = (props) => {

    const { inputs, handleChange, className } = props;

    return (
        <div className="flex  flex-wrap w-full ">
            <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.from}
                placeholder="Pick up"
                handleChange={(e) => handleChange({ "from": e.target.value })} />
            <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.to}
                placeholder="Destination"
                handleChange={(e) => handleChange({ "to": e.target.value })} />
            <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.time}
                handleChange={(e) => handleChange({ "time": e.target.value })} />
            {/* <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-center" /> */}
        </div>
    );
};
