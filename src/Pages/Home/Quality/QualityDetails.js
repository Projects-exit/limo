import React, { useEffect, useState } from 'react';
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";


import { _qualityList } from './_qualityList';
import { PageBubble } from './PageBubble';
export const QualityDetails = (props) => {

    const [page, setPage] = useState(0);


    const [active, setActive] = useState(_qualityList[0]);

    const qualityIndex = (page) => wrap(0, _qualityList.length, page);

    const paginate = (newDirection) => {
        setPage(page + newDirection);
        // setActive(qualityIndex(page))
    };

    const setActiveonClick = (index) => {
        setSeconds(index)
    }


    useEffect(() => {
        setActive(_qualityList?.[qualityIndex(page)])
    }, [page])

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // console.log("seconds") 
        // paginate(1)
        setPage(seconds)
    }, [seconds])


    // const Header = ({item}) => ()
    return (<>
        <div className="absolute left-0 hidden sm:block">
            <PageBubble qualityIndex={active} />
        </div>
        <div className='flex flex-col justify-between h-full'>
            <div className="flex w-full overflow-scroll no-scrollbar scroll-smooth">
                {_qualityList.map((item, index) => (<div
                    key={item?.title}
                    className={`pr-6  cursor-pointer ${active?.title === item?.title ? 'text-white' : 'text-[#838383]'}`}
                    onClick={() => setActiveonClick(index)}
                >
                    {item?.title}
                    {active?.title === item?.title ?
                        <motion.div className='h-1 w-full bg-copper mt-3' layoutId="underline"></motion.div>
                        : null}
                </div>))}
            </div>
            <div className='pt-8'>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={active ? active.title : "empty"}
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="text-[#838383]"
                    >
                        {active ? active.description : null}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="pt-12 flex justify-between">
                <div className="cursor-pointer " onClick={() => paginate(-1)}>
                    <svg fill='#b9884f' className='mr-12' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                </div>
                <div className="cursor-pointer " onClick={() => paginate(1)}>
                    <svg fill='#b9884f' className='ml-12' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                </div>

            </div>

        </div>
    </>
    );
};


