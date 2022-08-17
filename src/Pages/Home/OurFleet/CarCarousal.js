import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'


import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/swiper.scss';

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

// export const variants = {
//     enter: (direction) => {
//         return {
//             x: direction > 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1
//     },
//     exit: (direction) => {
//         return {
//             zIndex: 0,
//             x: direction < 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     }
// };

 

// export const swipeConfidenceThreshold = 10000;

// export const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
// };



export const CarCarousal = (prosp) => {

    const _store = useContext(Store)
    let _carsList = _store?.state?._carsList
    
    const [imageIndex, setImageIndex] = useState(0)
    const navigate = useNavigate()
    

    //  _carsList = _carsList.sort((a, b) => a.id - b.id)

    // console.log(_carsList)


    // const [[page, direction], setPage] = useState([0, 0]);
    // const imageIndex = (page) => wrap(0, _carsList.length, page);



    // const paginate = (newDirection) => {
    //     setPage([page + newDirection, newDirection]);
    // };

    SwiperCore.use([Autoplay]);


    const updateCar = () => {

        _store.dispatch({
            type: 'initOrder',
            payload: { car: _carsList[imageIndex] }
        })

        navigate("/reservation")
    }

    // const [seconds, setSeconds] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSeconds(seconds => seconds - 1);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     // console.log("seconds") 
    //     // paginate(1)
    //     setPage([seconds - 1, 1]);
    // }, [seconds])

    const _newSwipeList = [..._carsList]

    const params = {
        // slidesPerView: 3,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        observer:true,
        spaceBetween: 80,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        on: { 
        realIndexChange: (swiper) => setImageIndex(swiper.realIndex) 
        } ,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
      }
      const RenderCars = (carData, index) => {
        return (<div key={carData.id} className='max-w-xl'>
        <img 
        className={`mx-auto ${index === imageIndex && 'scale-[1.2] w-fit'}`}
        src={carData?.image} />
        </div>)
      }
    
      
  

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
                        {_carsList[imageIndex]?.brand}
                        </SlideTop>
                    </div>
                    <div className="text-center py-2 text-xl text-white font-bold text-copper">
                    <SlideBottom>
                        {_carsList[imageIndex]?.model}
                    </SlideBottom>
                    </div>
                </div>
                <div className=''>
                    <>
                    {_newSwipeList?.length > 0 && (<>
                    <Swiper {...params}>
                        {
                            _newSwipeList.map(RenderCars)
                        }
                        {/* <div style={{width :'100px'}} className="w-32 bg-red-300 h-16">hello</div>
                        <div style={{width :'200px'}} className="w-32 bg-red-300 h-16">hello</div>
                        <div style={{width :'300px'}} className="w-32 bg-red-300 h-16">hello</div> */}
                      
                    </Swiper>
                    </>)}

                    </>
                </div>
                
                <PageBubble  imageIndex={imageIndex}  />
                {/* <div className="flex justify-center mt-12 items-center text-2xl">
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

                 
                        <ButtonFilled onClick={updateCar}  label="RESERVE NOW" className="w-fit mx-auto text-sm" />
                    </SlideTop>
                </div> */}
            </div>
        </>
    );
};

