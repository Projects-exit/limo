import React, { useState, useEffect, useContext } from 'react'

import { ButtonFilled } from 'Components/Button';
import { PickUpData } from 'Components/PickUpData';

import { Store } from 'Store/orderStore'

export default function ReserveCard(props) {


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
        <>
            <div className=" bg-black ">
                <div className="container mx-auto w-full  ">
                    <div className="bg-[#1A1A1A] p-3 rounded-3xl relative z-30">
                        
                        <PickUpData inputs={inputs}  handleChange={handleChange} />
                       
                    </div>

                </div>
            </div>
        </>
    )
}


