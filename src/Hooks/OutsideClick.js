import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, onOutsideClick) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}



export default function Outsideclick(props) {

    const {onOutsideClick} = props

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onOutsideClick);
    return <div ref={wrapperRef}>{props.children}</div>;

}
