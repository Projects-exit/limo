import React from 'react';
import { motion } from 'framer-motion';


export const EntryScreen = (props) => {

    const _style = {
        left: {
            left: 0, top: 0, zIndex: '100000'
        },
        right: {
            right: 0, top: 0, zIndex: '100000'
        }
    };

    return (
        <React.Fragment>
            <motion.div
                style={props.left ? _style.left : _style.right}
                animate={{
                    width: ['100%', "0%"]
                }}
                transition={{
                    // duration: 1,
                    type: "spring",
                    // stiffness: 700,
                    damping: 30,
                    // ease: "easeInOut"
                }}
                className=" fixed h-full bg-grey">

            </motion.div>
        </React.Fragment>
    );

};


export const ChangeScreen = (props) => {

    const _style = {
        left: {
            left: 0, top: 0, zIndex: '100000'
        },
        right: {
            right: 0, top: 0, zIndex: '100000'
        }
    };

    return (
        <React.Fragment>
            <motion.div
                style={props.left ? _style.left : _style.right}
                animate={{
                    width: ['0%','100%', "0%"]
                }}
                transition={{
                    // duration: 1,
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                    // ease: "easeInOut"
                }}
                className=" fixed h-full bg-black">

            </motion.div>
        </React.Fragment>
    );

};

