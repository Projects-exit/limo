import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'

// import { _carsList, variants, swipePower, swipeConfidenceThreshold } from './OurFleet';

import ellipseBg from 'Assets/Bg/Ellipse.png'
import {ReactComponent as Tshape} from 'Assets/Bg/tShape.svg'

import { ReactComponent as BagIcon } from 'Assets/Misc/bagIcon.svg'
import { ReactComponent as PersonIcon } from 'Assets/Misc/personIcon.svg'

import { PageBubble } from './PageBubble';
import { ButtonFilled } from 'Components/Button';
// import { _carsList } from '../../_carsList';
import { Link, useNavigate } from 'react-router-dom';

import { Store } from 'Store/orderStore'

export const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

 

export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};



export const CarCarousal = (prosp) => {

    const _store = useContext(Store)
    let _carsList = _store?.state?._carsList

     _carsList = _carsList.sort((a, b) => a.id - b.id)

    // console.log(_carsList)


    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = (page) => wrap(0, _carsList.length, page);

    const navigate = useNavigate()


    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };


    const updateCar = () => {

        _store.dispatch({
            type: 'initOrder',
            payload: { car: _carsList[imageIndex(page)] }
        })

        navigate("/reservation")
    }

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // console.log("seconds") 
        // paginate(1)
        setPage([seconds - 1, 1]);
    }, [seconds])

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${ellipseBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
                
            >
                <div>
                    <div className="text-center pb-4">
                        <Tshape className='mx-auto' />
                    </div>
                    <div className="text-center py-2 text-2xl text-white font-bold">
                        <SlideTop>
                        {_carsList[imageIndex(page)]?.title}
                        </SlideTop>
                    </div>
                    <div className="text-center py-2 text-xl text-white font-bold text-copper">
                    <SlideBottom>
                        {_carsList[imageIndex(page)]?.description}
                    </SlideBottom>
                    </div>
                </div>
                <div className='flex justify-between items-center  w-full  overflow-x-hidden h-96  '>
                    <>
                        {/* <AnimatePresence initial={false} exitBeforeEnter> */}
                            <div className="w-1  -translate-x-">
                                <motion.img
                                    key={_carsList[imageIndex(page + 2)]?.id}
                                    layoutId={_carsList[imageIndex(page + 2)]?.id}
                                    animate={{ opacity: 1, y: 0, x: -600 }}
                                    // initial={{ opacity: 0, y: 0, x: direction > 0 ? -400 : 0 }}
                                    // exit={{ opacity: 0, x: -600 }}
                                    // transition={{ duration: 0.15 }}
                                    className=' '
                                    src={_carsList[imageIndex(page + 2)]?.productImage} />
                            </div>
                            <div className="w-1/3 -translate-x-" onClick={() => paginate(-1)} >
                                <motion.img
                                    key={_carsList[imageIndex(page + 1)]?.id}
                                    layoutId={_carsList[imageIndex(page + 1)]?.id}
                                    animate={{ opacity: 1, y: 0, x: -200 }}
                                    // initial={{ opacity: 0, y: 0, x: direction > 0 ? -400 : 0 }}
                                    // exit={{ opacity: 0, x: -600 }}
                                    // transition={{ duration: 0.15 }}
                                    className=' '
                                    src={_carsList[imageIndex(page + 1)]?.productImage} />
                            </div>

                            <div className="prev " onClick={() => paginate(-1)}>
                                <svg fill='white' className='mr-12' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                            </div>
                            <div className='w-/3'>
                                <motion.img
                                    key={_carsList[imageIndex(page)]?.id}
                                    layoutId={_carsList[imageIndex(page)]?.id}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    // initial={{ opacity: 0, y: 0, x: 0 }}
                                    // exit={{ opacity: 0, x: 0 }}
                                    className=' '
                                    src={_carsList[imageIndex(page)]?.productImage} />
                            </div>
                            <div className="next " onClick={() => paginate(1)}>
                                <svg fill='white' className='ml-12' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                            </div>
                            <div className="w-1/3 translate-x-" onClick={() => paginate(1)}>

                                <motion.img
                                    key={_carsList[imageIndex(page - 1)]?.id}
                                    layoutId={_carsList[imageIndex(page - 1)]?.id}
                                    animate={{ opacity: 1, y: 0, x: 200 }}
                                    // initial={{ opacity: 0, y: 0, x: direction > 0 ? -200 : 400 }}
                                    // exit={{ opacity: 0, x: 0 }}
                                    className=' '
                                    src={_carsList[imageIndex(page - 1)]?.productImage} />
                            </div>
                            <div className="w-1 translate-x-">

                                <motion.img
                                    key={_carsList[imageIndex(page - 2)]?.id}
                                    layoutId={_carsList[imageIndex(page - 2)]?.id}
                                    animate={{ opacity: 1, y: 0, x: 600 }}
                                    // initial={{ opacity: 0, y: 0, x: direction > 0 ? -200 : 400 }}
                                    // exit={{ opacity: 0, x: 0 }}
                                    className=' '
                                    src={_carsList[imageIndex(page - 2)]?.productImage} />
                            </div>
                        {/* </AnimatePresence> */}

                    </>
                </div>

                <PageBubble page={page} imageIndex={imageIndex} />
                <div className="flex justify-center mt-12 items-center text-2xl">
                    <SlideLeft>
                    <div className='mx-4 flex items-center'>
                        <div className="bg-grey rounded-full h-9 w-9 flex items-center justify-center">
                            <PersonIcon height={15} width={15} />
                        </div>
                        <div className="text-white ml-3 font-bold">
                            {_carsList[imageIndex(page)]?.seat}
                        </div>
                    </div>
                    </SlideLeft>
                    <SlideRight>
                    <div className='mx-4 flex items-center'>
                        <div className="bg-grey rounded-full  h-9 w-9 flex items-center justify-center">
                            <BagIcon height={23} width={23} />
                        </div>
                        <div className="text-white ml-3 font-bold">
                            {_carsList[imageIndex(page)]?.luggage}
                        </div>
                    </div>
                    </SlideRight>
                </div>
                <div className="pt-12 text-center relative z-40">
                    <SlideTop>

                    {/* <Link to="/fleet"> */}
                        <ButtonFilled onClick={updateCar}  label="RESERVE NOW" className="w-fit mx-auto text-sm" />
                    {/* </Link> */}
                    </SlideTop>
                </div>
            </div>
        </>
    );
};

