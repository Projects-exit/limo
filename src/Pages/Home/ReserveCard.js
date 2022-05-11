import React, { useState } from 'react';
import { InputText } from './InputText';
import { ButtonFilled } from 'Components/Button';

export const ReserveCard = (props) => {

    const [inputs, setInputs] = useState({
        from: "",
        to: ""
    });

    const handleChange = (val) => {
        setInputs(prev => ({
            ...prev,
            ...val
        }));
    };

    return (
        <div className=''>
            <div className="container mx-auto w-full  ">
                <div className="text-center font-bold text-white text-3xl pb-8">
                    Reserve the car now 
                </div>
                <div className="relative">

                    <div className="flex absolute w-full bg-[#1A1A1A] p-3 rounded-3xl">
                        <InputText
                            className="w-3/12 px-3"
                            value={inputs?.from}
                            handleChange={(e) => handleChange({ "from": e.target.value })} />
                        <InputText
                            className="w-3/12 px-3"
                            value={inputs?.to}
                            handleChange={(e) => handleChange({ "to": e.target.value })} />
                        <InputText
                            className="w-3/12 px-3"
                            value={inputs?.to}
                            handleChange={(e) => handleChange({ "from": e.target.value })} />
                        <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow" />
                    </div>
                </div>
            </div>
        </div>
    );
};
