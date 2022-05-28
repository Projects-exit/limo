import React from 'react'
import Layout from 'Components/Layout'

import Privacy from './Privacy'

export default function Index(props) {
    

    return (
        <>
        <Layout>
            <div className="py-32 ">
                <div className="container mx-auto text-white">

                <div className="text-center text-white text-2xl font-bold">
                    Privacy Policy
                </div>
                <div className="my-4">
                    <div className="h-[0.5px] w-full bg-copper"></div>
                </div>
                <div className="py-16">
                    <div className="text-2xl">
                        <Privacy />
                    </div>
                </div>
                </div>
            </div>
        </Layout>
        </>
    )
}
