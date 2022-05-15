import React from 'react'
import { ReserveCard } from './ReserveCard'

export default function Reserve(props) {


    return (
        <>  
        <div className="bg-black py-2 block sm:hidden">
            <div className="h-[0.5px] w-32 bg-copper mx-auto"></div>
        </div>
            <div className="py-16 sm:py-32 bg-black">
                <ReserveCard />
            </div>
        </>
    )
}


