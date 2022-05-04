import React from 'react'

// ** assets
import carImage from 'Assets/Bg/hero_car.png'
import {ReactComponent as ScrollBar} from 'Assets/Misc/scroll.svg'

export default function Hero(props) {
    

    return (
        <>
        <div className="hero bg-black  py-24 w-full">
            <div className=" mx-auto">
                <div className="relative">
                <div className="py-2 text-grey-l text-3xl sm:text-6xl uppercase font-bold translate-y-14 z-20">
                    Limousine service <br /> at Your doorstep
                </div>
                <div className="relative h-[450px] ">
                        <div className="h-[0.5px] w-32 bg-copper absolute top-24"></div>
                        <div className="h-[0.5px] w-64 bg-copper absolute top-32"></div>
                   
                        <div className="h-[0.5px] w-32 bg-copper absolute right-24 -top-8"></div>
                        
                        <div className="h-[0.5px] w-24 bg-copper absolute top-44 right-0"></div>
                        <div className="h-[0.5px] w-44 bg-copper absolute top-52 right-0"></div>

                    <div className="absolute w-full text-center">
                        <img src={carImage} alt="" className='z-10 w-full  max-w-7xl mx-auto' />
                    </div>
                </div>
                <div className="relative">
                    <div className='flex justify-center absolute w-full -translate-y-14'>
                        <ScrollBar />
                    </div>
                </div>
                </div>
        
            </div>
        </div>
            
        </>
    )
}
