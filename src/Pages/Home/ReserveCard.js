import React, { useState } from 'react';
import { InputText } from 'Components/InputText';
import { ButtonFilled } from 'Components/Button';
import { PickUpData } from 'Components/PickUpData';

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
                <div className="relative h-56 lg:h-0">
                    <div className="flex flex-wrap absolute w-full bg-[#1A1A1A] p-3 rounded-3xl">
                        <div className="grow">
                        <PickUpData />
                        </div>
                        <ButtonFilled label={<>Reserve&nbsp;now</>} className="mr-0 ml-auto w-full lg:w-fit  text-sm my-2 lg:my-0" />
                    </div>
                    
                    {/* <div className="flex absolute w-full bg-[#1A1A1A] p-3 rounded-3xl">
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
                        <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-sm" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};
