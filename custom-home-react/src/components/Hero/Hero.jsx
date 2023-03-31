import React from 'react'
import { motion } from 'framer-motion'

import styles from './Hero.module.css'

import couple from '../../assets/couple.png'
import bg from '../../assets/construct.png'

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <h1>Builder of Fine Homes</h1>
            <div className={styles.heroContent}>
                <motion.div
                    initial={{ opacity: 0, transform: 'translateX(-100px)' }}
                    animate={{ opacity: 1, transform: 'translateX(0)' }}
                    onEnter={() => {
                        window.scrollTo(0, 0);
                    }}
                    className={styles.heroBgContainer}>
                    <img src={bg} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, transform: 'translateX(100px)' }}
                    animate={{ opacity: 1, transform: 'translateX(0)' }}
                    onEnter={() => {
                        window.scrollTo(0, 0);
                    }}
                    className={styles.heroCoupleContainer}>
                    <img src={couple} />
                </motion.div>
            </div>

        </div>
    )
}

export default Hero