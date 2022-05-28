import React from 'react'

import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'

import { CarCarousal } from './CarCarousal';

export default function OurFleet(props) {


    return (
        <>
            <div className="bg-black py-24  pt-44">
                <div className="relative hidden sm:block">
                        <SlideRight>
                            <div className="h-[0.5px] w-56 bg-copper absolute  top-24"></div>
                        </SlideRight>
                    
                        <SlideRight>
                            <div className="h-[0.5px] w-56 bg-copper absolute -top-24 right-44"></div>
                        </SlideRight>
                </div>
                <div className="container mx-auto">
                    <div className="text-3xl text-white font-bold text-center">
                        <SlideTop>

                        Meet Our Fleet
                        </SlideTop>
                    </div>
                </div>
                <div className="pt-6 w-full">
                    <CarCarousal />
                </div>
            </div>

        </>
    )
}



