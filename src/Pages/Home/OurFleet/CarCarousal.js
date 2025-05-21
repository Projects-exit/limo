import React, { useState, useContext, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'


import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
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



export const CarCarousal = (prosp) => {

    const _store = useContext(Store)
    let _carsList = _store?.state?._carsList

    
    const [imageIndex, setImageIndex] = useState(0)
    const navigate = useNavigate()
    

    const swiperRef = useRef(null);

    SwiperCore.use([Autoplay, Navigation]);

    
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const RenderCars = (carData, index) => {

        const navigateSlide = () => {
            console.log(index)
            goPrev()
            // if(index === imageIndex){
            //     return
            // }
            // if((index < imageIndex || index === 1)) {
            //     goPrev()
            // } else if(index > imageIndex || index === (_carsList.length)){
            //     goNext()
            // }
        }

        return (<div key={carData.id} 
             className='max-w-xl relative'>
                <div  className="w-full h-full absolute"></div>
            <img   
                className={`mx-auto ${index === imageIndex && ''}  max-w-[450px]  sm:max-w-[550px]`}
                src={carData?.image} />
        </div>)
    }

    

   
    const _newSwipeList = [..._carsList]

    const params = {
        // slidesPerView: 3,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        observer:true,
        spaceBetween: 80,
        on: { 
        realIndexChange: (swiper) => setImageIndex(swiper.realIndex) 
        } ,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            550 : {
                
            }
        }
        
      }

      const updateCar = () => {

        _store.dispatch({
            type: 'initOrder',
            payload: { car: _carsList[imageIndex] }
        })

        navigate("/reservation")
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
                <div className="relative">
                    <div className="absolute z-30 w-full  flex justify-center -translate-y-[80px] sm:translate-y-[130px]">
                            <div onClick={goPrev} className="flex-grow h-30"></div>
                            <div onClick={goPrev} className="">
                                <svg fill='white' className='w-[15px] sm:w-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                            </div>
                            <div className="w-[250px] sm:w-[620px] h-[0.1px]"></div>
                            <div onClick={goNext}>
                                <svg fill='white' className='w-[15px] sm:w-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                            </div>
                            <div  onClick={goNext} className="flex-grow h-30"></div>
                        </div>
                </div>
                <div className='w-full overflow-hidden relative'>
                    
                    <div onClick={goPrev} className="absolute z-30 h-[300px] left-0 w-[10px] sm:w-[100px] md:w-[200px]"></div>
                    <div onClick={goNext} className="absolute z-30 h-[300px] right-0 w-[10px] sm:w-[100px] md:w-[200px]"></div>
                    <div className=''>
                        {_newSwipeList?.length > 0 && (<>
                        <Swiper {...params} ref={swiperRef}>
                            {
                                _newSwipeList.map(RenderCars)
                            }
                            {/* <div style={{width :'100px'}} className="w-32 bg-red-300 h-16">hello</div>
                            <div style={{width :'200px'}} className="w-32 bg-red-300 h-16">hello</div>
                            <div style={{width :'300px'}} className="w-32 bg-red-300 h-16">hello</div> */}
                        
                        </Swiper>
                        </>)}
                    </div>
                    
                </div>
                
                <PageBubble  imageIndex={imageIndex}  />
                <div className="flex justify-center mt-12 items-center text-2xl">
                    <SlideLeft>
                    <div className='mx-4 flex items-center'>
                        <div className="bg-grey rounded-full h-9 w-9 flex items-center justify-center">
                            <PersonIcon height={15} width={15} />
                        </div>
                        <div className="text-white ml-3 font-bold">
                            {_carsList[imageIndex]?.seat}
                        </div>
                    </div>
                    </SlideLeft>
                    <SlideRight>
                    <div className='mx-4 flex items-center'>
                        <div className="bg-grey rounded-full  h-9 w-9 flex items-center justify-center">
                            <BagIcon height={23} width={23} />
                        </div>
                        <div className="text-white ml-3 font-bold">
                            {_carsList[imageIndex]?.luggage}
                        </div>
                    </div>
                    </SlideRight>
                </div>
                <div className="pt-12 text-center relative z-40">
                    <SlideTop>

                 
                        <ButtonFilled onClick={updateCar}  label="RESERVE NOW" className="w-fit mx-auto text-sm" />
                    </SlideTop>
                </div>
            </div>
        </>
    );
};

