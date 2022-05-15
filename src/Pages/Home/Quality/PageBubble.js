import React from 'react';
import { motion } from "framer-motion";
import { _qualityList } from './_qualityList';

export const PageBubble = ({ qualityIndex}) => {

    // const Bubble = () =>
    // { console.log(imageIndex(page)); }

    return (<div>
        <div className=" ">
            <div className="flex w-fit  mx-auto">
                <div className="flex flex-col items-center">

                    {_qualityList.map((item, index) => (<>
                        <motion.div className='h-2 w-2 bg-copper rounded-full my-3' layoutId={item?.title}></motion.div>
                        {item?.title === qualityIndex?.title &&
                            <motion.div className='w-20 bg-copper w-[0.5px] h-16' layoutId='pagenate2'></motion.div>}
                    </>)
                    )}
                    <div className='h-2 w-2 bg-copper rounded-full my-3 mx-12'></div>
                </div>
            </div>

        </div>
    </div>);
};
