import React from 'react'
import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import orange from 'Assets/Places/orange.png'
import LasVegas from 'Assets/Places/LasVegas.png'
import LosAngels from 'Assets/Places/LA.png'
import Sandiego from 'Assets/Places/sanDeago.png'
import PalmSprings from 'Assets/Places/PalmSprings.png'
import SanFrancisco from 'Assets/Places/sanFrancisco.png'

export default function OurLocation(props) {

    const _locations = [
        {
            image : orange,
            title : 'Orange County',
            className : "order-1",
        },
        {
            image : LasVegas,
            title : 'Las Vegas',
            className : 'row-span-2 lg:row-span-1 order-2'
        },
        {
            image : LosAngels,
            title : 'Los Angeles County',
            className : 'lg:col-span-2 order-3'
        },
        {
            image : Sandiego,
            title : 'San Diego',
            className : 'lg:col-span-2 lg:order-4'
        },
        {
            image : PalmSprings,
            title : 'Palm Springs',   
            className : 'row-span-2 lg:row-span-1 lg:order-5' 
        },
        {
            image : SanFrancisco,
            title : 'San Francisco',
            className : 'order-4  lg:order-6' 
        },
        
    ]
    

    return (
        <>
        <div className="relative hidden sm:block">
            <div className="absolute flex justify-end w-full top-0 right-0 overflow-x-clip ">
                <Ripple className='-translate-y-44  translate-x-24' />
            </div>
            <SlideRight>
                <div className="h-[0.5px] w-56 bg-copper absolute -top-20 right-0"></div>
            </SlideRight>  
            <SlideRight>
                <div className="h-[0.5px] w-72 bg-copper absolute top-0 right-0"></div>
            </SlideRight>  
            <SlideRight>
                <div className="h-[0.5px] w-56 bg-copper absolute  top-24"></div>
            </SlideRight>
            <SlideRight>
                <div className="h-[0.5px] w-96 bg-copper absolute  top-40"></div>
            </SlideRight>
        
        </div>
        <div className='bg-black py-24 '>
            <div className="text-3xl text-white text-center font-bold">
                <SlideTop>

                Our locations
                </SlideTop>
            </div>
            <div className="py-20 pt-32 container mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                    {_locations.map(item => <div key={item.title} className={`relative ${item.className} overflow-hidden rounded-3xl min-h-[250px]`}>
                        <div className="absolute w-full h-full  bg-black-grad"></div>
                        <JustAppear>
                        <div 
                            style={{
                                backgroundImage:`url(${item?.image})`,
                                backgroundSize : 'cover',
                                backgroundPosition : 'center'
                            }}
                            className="absolute w-full h-full  "> </div>
                        <div className="absolute bottom-0 pl-5 pb-5 text-2xl font-bold text-white"> {item.title} </div>
                        </JustAppear>
                        {/* <img src={item?.image} className="w-full h-full" alt="" /> */}
                    </div>)}
                </div>
            </div>
        </div>
        </>
    )
}
