import React from 'react';
import { motion } from "framer-motion";
import { _carsList } from "../../_carsList";

export const PageBubble = ({ page, imageIndex }) => {

    // const Bubble = () =>
    // { console.log(imageIndex(page)); }

    return (<div>
        <div className=" ">
            <div className="flex w-fit  mx-auto">
                <div className="flex items-center">

                    {_carsList.map((item, index) => (<>
                        <motion.div className='h-2 w-2 bg-copper rounded-full mx-3' layoutId={item?.title}></motion.div>
                        {(index) === imageIndex(page) &&
                            <motion.div className='w-20 bg-copper h-[0.5px]' layoutId='pagenate1'></motion.div>}
                    </>)
                    )}
                    <div className='h-2 w-2 bg-copper rounded-full mx-3'></div>
                </div>
            </div>

        </div>
    </div>);
};
