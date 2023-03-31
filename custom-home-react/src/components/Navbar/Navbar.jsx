import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Twirl as Hamburger } from 'hamburger-react'
import { AiFillPhone } from 'react-icons/ai'

import logo from '../../assets/BCHLogo.png'

import styles from './Navbar.module.css';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)


    return (

        <div className={styles.navbarWrapper}>


            <div className={styles.mobileMenu}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <motion.div
                initial={{ opacity: 0, transform: 'translateX(-100px)' }}
                animate={{ opacity: 1, transform: 'translateX(0)' }}
                onEnter={() => {
                    window.scrollTo(0, 0);
                }}

                className={styles.logoWrapper}>
                <img src={logo} alt='logo' />
            </motion.div>

            <div>
                <ul className={styles.navMenu}>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Home</motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Services</motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Home</motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >Home</motion.li>
                </ul>
            </div>

            <motion.div
                initial={{ opacity: 0, transform: 'translateX(100px)' }}
                animate={{ opacity: 1, transform: 'translateX(0)' }}
                onEnter={() => {
                    window.scrollTo(0, 0);
                }}

                className={styles.actionWrapper}>
                <div className={styles.phone}>
                    <AiFillPhone />
                </div>

                <motion.h2
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.phoneNo}>
                    <a href="tel:2488897000">(248) 889-7000</a>
                </motion.h2>
            </motion.div>
        </div>
    )
}

export default Navbar