import React, { useState } from 'react'

import { ButtonFilled } from 'Components/Button';
import { PickUpData } from 'Components/PickUpData';

export default function ReserveCard(props) {


    const [inputs, setInputs] = useState({
        from: "",
        to: "",
        time : ""
    });

    const handleChange = (val) => {
        setInputs(prev => ({
            ...prev,
            ...val
        }));
    };

    return (
        <>
            <div className="bg-black pt-44 pb-24">
                <div className="container mx-auto w-full  ">
                    <div className="bg-[#1A1A1A] p-3 rounded-3xl">
                        <PickUpData inputs={inputs}  handleChange={handleChange} />
                    </div>

                </div>
            </div>
        </>
    )
}


