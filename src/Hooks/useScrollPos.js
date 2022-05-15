import React, { useState, useEffect } from 'react'

export default function Usescrollpos(props) {

    const [offset, setOffset] = useState(0);
    const [scrollDir, setScrollDir] = useState(-1);


    const isScrollBeyond = (max = 200) => {
        return (offset > max)
    }

    const isScrollDown = () => {
        return scrollDir === -1
    }

    const isScrollUp = () => {
        return scrollDir === 1
    }

    useEffect(() => {

        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? -1 : 1);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const handleScroll = () => {
            const _offset = window.scrollY;
            setOffset(_offset)

            // *****
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        }


        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offset])

    return { isScrollBeyond, isScrollDown, isScrollUp }
}
