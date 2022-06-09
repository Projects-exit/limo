import React, {useState, useEffect} from 'react'
import { CardGrey } from 'Components/Cards'

import { Button, ButtonFilled } from 'Components/Button'
import { Loader } from 'Components/Loader'

export default function OTP(props) {

    const [loading, setLoading] = useState(true)

    return (
        <>
            <div className="fixed z-40 h-screen w-full bg-black/90">
                <div className="flex justify-center items-center w-full h-screen">
                    <CardGrey className="w-full max-w-lg text-center">
                        {loading ? <div className="w-fit mx-auto">
                            <Loader height={60} width={60} />
                            <div className="text-center text-copper text-sm font-bold pt-5">
                                Requesting...
                            </div>
                        </div> :
                            <div>
                                <div className=" text-2xl font-bold text-white">
                                    Thanks! <br />
                                    We will contact<br />
                                    You soon!
                                </div>
                                <div className="pt-8 text-white">
                                    Your order number:
                                </div>
                                <div className="py-2 text-copper text-2xl font-bold">
                                    X000000
                                </div>
                                <div className="pt-8">
                                    <ButtonFilled label="HOME" className="text-center w-fit mx-auto text-sm" />
                                </div>
                            </div>
                        }
                    </CardGrey>
                </div>
            </div>

        </>
    )
}
