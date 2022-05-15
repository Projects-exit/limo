import React from 'react'


import { CarCarousal } from './CarCarousal';

export default function OurFleet(props) {


    return (
        <>
            <div className="bg-black py-24  ">
                <div className="container mx-auto">
                    <div className="text-3xl text-white font-bold text-center">
                        Meet Our Fleet
                    </div>
                </div>
                <div className="pt-6 w-full">
                    <CarCarousal />
                </div>
            </div>

        </>
    )
}



