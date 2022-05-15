import React from 'react'

import { _carsList } from 'Pages/_carsList'


import { CarCard } from './CarCard'

export default function ChooseCar(props) {


    return (
        <>
            <div className="bg-black">
                <div className="container mx-auto">
                    <div className="text-center text-2xl text-white pb-6 font-bold">
                        Choose a  car
                    </div>
                    <div className="h-[0.5px] w-full bg-copper mb-6"></div>
                    <div className='py-6'>
                        {_carsList.map(item => {

                            return (<CarCard item={item} key={item?.id} />)
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

