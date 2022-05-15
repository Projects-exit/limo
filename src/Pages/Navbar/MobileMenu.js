import React from 'react'
import { Link } from 'react-router-dom'

import { Button, ButtonFilled } from 'Components/Button'

import { ReactComponent as Logo } from 'Assets/Misc/Logo.svg'
import { ReactComponent as Menu } from 'Assets/Misc/Menu.svg'

export default function MobileMenu(props) {

    const { open, setOpen } = props

    const IconClose = () => <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>;

    const Linkwrapper = ({children}) =>   <div className=" my-12">{children}</div>


    return (
        <>
            <div className={`${open ? 'translate-x-0' : 'translate-x-full'} transition-transform fixed z-50  top-0 right-0 h-full w-full bg-black `}>
                <div className=" mx-auto  px-6 ">
                    <div className="flex justify-between pt-5 items-center">
                        <div className='w-fit'>
                            <Link to="/">
                                <Logo width={140} />
                            </Link>
                        </div>
                        <div onClick={() => setOpen(false)} className="cursor-pointer text-copper">
                            <IconClose />
                        </div>
                    </div>
                    <div className="py-24 text-copper font-bold text-center text-2xl">
                       <Linkwrapper>
                            <Link to="/fleet" >
                                Our fleet
                            </Link>
                       </Linkwrapper>
                       <Linkwrapper>
                            <Link to="/#drivers">
                                Our drivers
                            </Link>
                       </Linkwrapper>
                       <Linkwrapper>
                            <Link to="/privacy">
                                Privacy policy
                            </Link>
                       </Linkwrapper>
                    </div>
                    <div className="py-4">
                        <ButtonFilled label="PAYMENT" className="w-full text-center"/>
                    </div>
                    <div className="py-4">
                        <Button label="RESERVE NOW" className="w-full text-center"/>
                    </div>
                </div>
            </div>
        </>
    )
}
