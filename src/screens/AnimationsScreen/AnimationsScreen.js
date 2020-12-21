import React from 'react'
import './animationsScreen.scss';
import { motion } from "framer-motion"

function AnimationsScreen() {
    return (
        <div className='animationsScreen'>

            <motion.div
                className='animationsScreen__square animationsScreen__square--opacity'
                animate={{
                    opacity: [0, 1],
                    transition: {
                        yoyo: Infinity
                    },
                }}
            />

            <motion.div
                className='animationsScreen__square animationsScreen__square--transform'
                animate={{
                    x: [-100, 100],
                    transition: {
                        yoyo: Infinity
                    },

                }}
                transition={{ duration: 2 }}
            />

            <motion.div
                className='animationsScreen__square animationsScreen__square--rotate'
                animate={{
                    rotate: [0, 360],
                    transition: {
                        yoyo: Infinity
                    },
                }}
            />

            <motion.h1
                animate={{
                    scale: [0.5, 1],
                    transition: {
                        yoyo: Infinity
                    },

                }}
                transition={{ duration: 2 }}
            >
                Tekst
</motion.h1>

        </div>
    )
}

export default AnimationsScreen
