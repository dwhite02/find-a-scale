import React from 'react';
import { useScale } from '../contexts/ScaleContext';
import ScaleContentDisplay from "./ScaleContentDisplay";
import Piano from './Piano';


const ContainerContent = () => {
    const { data, loading, error } = useScale();

    return (
        <div className="mb-5">
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                    <p className="text-info">Loading...</p>
                </div>
            )}
            {data && (
                <>
                    <ScaleContentDisplay />
                    <Piano />
                </>
            )}
            {error && (
                <div className="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
                    <p className="mb-0">Error: {error.message}</p>
                </div>
            )}
        </div>
    )
}

export default ContainerContent;