import React from 'react'
import Hero from './Hero'
import Reserve from './Reserve'
import Quality from './Quality'


export default function Index(props) {
    

    return (
        <>
            <div className="text-center ">
            <Hero />
            <Reserve />
            <Quality />
            </div>
        </>
    )
}
