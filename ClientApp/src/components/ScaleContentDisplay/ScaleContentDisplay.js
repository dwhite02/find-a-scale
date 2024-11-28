import React from "react";
import ScaleList from "./ScaleList";
import RootNote from "./RootNote";
import { useScale } from "../../contexts/ScaleContext";
import { motion } from "motion/react";

import "./ScaleContentDisplay.scss";

const ScaleContentDisplay = () => {
    const { data} = useScale();

    return (
        <motion.div
            // key={data ? data.musicItem?.scaleList.join('-') : 'initial'}  // Change key when scaleData changes
            // initial={{ opacity: 0 }}  // Fade-in on mount
            // animate={{ opacity: 1 }}  // Fade-in after scaleData changes
            // exit={{ opacity: 0 }}  // Fade-out when leaving (optional)
            // transition={{ duration: .25 }}  // Duration of fade-in
            initial={{ opacity: 0, y: 100 }} // Start off-screen to the left
            animate={{ opacity: 1, y: 0 }} // Slide in and fade in
            transition={{ duration: .675}}
        >
            <div className="component1 d-md-flex align-items-md-stretch">
                <RootNote scaleData={data} />
                <ScaleList scaleData={data} />
            </div>
        </motion.div>
    )
}

export default ScaleContentDisplay;