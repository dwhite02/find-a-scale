import React from "react";
import ScaleList from "./ScaleList";
import RootNote from "./RootNote";
import { useScale } from "../../contexts/ScaleContext";

import "./ScaleContentDisplay.scss";

const ScaleContentDisplay = () => {
    const { data, loading, error } = useScale();

    return (
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
    )
}

export default ScaleContentDisplay;