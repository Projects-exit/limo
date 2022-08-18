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
        <div className='relative z-20'>
            <div className="container mx-auto w-full  ">
                <div className="text-center font-bold text-white text-2xl sm:text-3xl pb-16">
                    <SlideBottom>
                        Reserve the car now
                    </SlideBottom>
                </div>

                <div className="relative h-56 lg:h-0">
                    <SlideTop>
                        <div className="flex flex-wrap absolute w-full bg-[#1A1A1A] py-4 px-3 rounded-[40px]">
                            <div className="grow">
                                <PickUpData 
                                    handleChange={handleChange}
                                    inputs={inputs} />
                            </div>
                            <div className="px-3 w-full lg:w-fit ">
                                <Link to="/fleet/pick">
                                    <ButtonFilled label={<>Reserve&nbsp;now</>} className="mr-0 ml-auto w-full lg:w-fit  text-sm my-2 lg:my-0" />
                                </Link>
                            </div>
                        </div>
                    </SlideTop>

                    
                </div>
            </div>
        </div>
    );
};
