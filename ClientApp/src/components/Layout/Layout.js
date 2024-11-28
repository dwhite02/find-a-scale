import React, {useState} from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../NavMenu';
import './Layout.css'
import InitialScreen from '../InitialScreen';
import { motion, AnimatePresence } from "motion/react";

const Layout = ({ children }) => {
    const [isInitialScreen, setIsInitialScreen] = useState(true);

    const handleScreenChange = () => {
        setIsInitialScreen(false);
    }

    return (
        <div id="page">
            <AnimatePresence mode='wait'>
                {/* Initial Screen with animation on mount and unmount */}
                {isInitialScreen && (
                    <motion.div
                        key="initial-screen" // Unique key for AnimatePresence
                        initial={{ opacity: 0 }} // Start invisible
                        animate={{ opacity: 1 }} // Fade in
                        exit={{ opacity: 0, y: "-100%" }} // Slide out to the left
                        transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 } }}
                    >
                        <InitialScreen isInitialScreen={isInitialScreen} onClick={handleScreenChange} />
                    </motion.div>
                )}

                {/* Content Screen with fade-in effect */}
                {!isInitialScreen && (
                    <motion.div
                        key="content-screen" // Unique key for AnimatePresence
                        initial={{ opacity: 0, y: "100%" }} // Start offscreen to the right
                        animate={{ opacity: 1, y: 0 }} // Slide in and fade in
                        exit={{ opacity: 0 }} // Fade out when exiting
                        transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 } }}
                    >
                        <NavMenu />
                        <Container tag="main">
                            {children}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;

