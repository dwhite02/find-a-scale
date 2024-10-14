import React from "react";
import ScaleList from "./ScaleList";
import RootNote from "./RootNote";
import "./ScaleContentDisplay.scss";

const ScaleContentDisplay = ({scaleData, isLoading, isError}) => {
 
    return (
        <div className="mb-5">
            {isLoading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                    <p className="text-info">Loading...</p>
                </div>
            )}
            {isError && (
                <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
                    <p className="mb-0">Error: {isError.message}</p>
                </div>
            )}
            {scaleData && (
                <div className="component1 d-md-flex align-items-md-stretch">
                    <RootNote scaleData={scaleData} />
                    <ScaleList scaleData={scaleData} />
                </div>
            )}
        </div>
    )
}

export default ScaleContentDisplay;