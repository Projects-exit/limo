import { motion } from "framer-motion"

export const SlideLeft = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const SlideRight = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const JustAppear = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0,  }}
            whileInView={{ opacity: 1,  }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const SlideTop = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0, y : -30 }}
            whileInView={{ opacity: 1,  y : 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}

export const SlideBottom = (props) => {

    return (
        <motion.div
            initial={{ opacity: 0, y : 30 }}
            whileInView={{ opacity: 1, y : 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={props.className}>
                {props?.children}
        </motion.div>

    )
}