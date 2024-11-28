import React from "react";
import ScaleList from "./ScaleList";
import RootNote from "./RootNote";
import { useScale } from "../../contexts/ScaleContext";
import { motion } from "motion/react";

import "./ScaleContentDisplay.scss";

const ScaleContentDisplay = () => {
    const { data, loading, error } = useScale();

    return (
        <motion.div
            key={data ? data.musicItem?.scaleList.join('-') : 'initial'}  // Change key when scaleData changes
            initial={{ opacity: 0 }}  // Fade-in on mount
            animate={{ opacity: 1 }}  // Fade-in after scaleData changes
            exit={{ opacity: 0 }}  // Fade-out when leaving (optional)
            transition={{ duration: 1 }}  // Duration of fade-in
        >
            <div className="mb-5">
                {loading && (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                        <p className="text-info">Loading...</p>
                    </div>
                )}
                {error && (
                    <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
                        <p className="mb-0">Error: {error.message}</p>
                    </div>
                )}
                {data && (
                    <div className="component1 d-md-flex align-items-md-stretch">
                        <RootNote scaleData={data} />
                        <ScaleList scaleData={data} />
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ScaleContentDisplay;