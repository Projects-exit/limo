import React, { useState, useContext, useEffect } from 'react';
import { InputText } from 'Components/InputText';
import { ButtonFilled } from 'Components/Button';
import { PickUpData } from 'Components/PickUpData';
import { Link } from 'react-router-dom';

import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'
import { Store } from 'Store/orderStore'

export const ReserveCard = (props) => {


    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    const [inputs, setInputs] = useState({
        from: '',
        to: '',
        date: '',
        time: '',
    })
    const handleChange = (val) => {

        setInputs(prev => ({
            ...prev,
            ...val
        }));
    };

    const updateStore = () => {
        
        _store.dispatch({
            type: 'initOrder',
            payload: inputs
        })
    }

    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            ...storeInputs
        }))
    }, [])

    useEffect(() =>{
        updateStore()
    }, [inputs])

    return (
        <div className=''>
            <div className="container mx-auto w-full  ">
                <div className="text-center font-bold text-white text-3xl pb-16">
                    <SlideBottom>
                        Reserve the car now
                    </SlideBottom>
                </div>

                <div className="relative h-56 lg:h-0">
                    <SlideTop>
                        <div className="flex flex-wrap absolute w-full bg-[#1A1A1A] p-3 rounded-3xl">
                            <div className="grow">
                                <PickUpData 
                                    handleChange={handleChange}
                                    inputs={inputs} />
                            </div>
                            <div className="px-3 w-full lg:w-fit">
                                <Link to="/fleet">
                                    <ButtonFilled label={<>Reserve&nbsp;now</>} className="mr-0 ml-auto w-full lg:w-fit  text-sm my-2 lg:my-0" />
                                </Link>
                            </div>
                        </div>
                    </SlideTop>

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
