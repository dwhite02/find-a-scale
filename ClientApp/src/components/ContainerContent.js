import React from 'react';
import { useScale } from '../contexts/ScaleContext';
import ScaleContentDisplay from "./ScaleContentDisplay";
import Piano from './Piano';

const ContainerContent = () => {
    const { data, loading, error } = useScale();

    return (
        <div className="mb-5 position-relative">
            {/* Loading spinner with fixed height */}
            {loading && (
                <div
                    style={{
                        height: '445px',  // This ensures space is reserved for loading state
                        position: 'absolute',
                        width: '100%',
                        background: 'white',
                        zIndex: '999'
                    }}
                >
                    <div
                        className="alert alert-primary d-flex justify-content-center align-items-center" role="alert"
                        style={{
                            position: 'absolute',
                            top: '50%', // Center it vertically within the container
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                        }}
                    >
                        <p className="mb-0">Loading...</p>
                    </div>
                </div>
            )}

            {/* Content that doesn't affect layout */}
            {data && (
                <>
                    <ScaleContentDisplay />
                    <Piano />
                </>
            )}

            {/* Error message */}
            {error && (
                <div
                    style={{
                        height: '445px',  // This ensures space is reserved for loading state
                        position: 'absolute',
                        width: '100%',
                        background: 'white',
                        zIndex: '9999'
                    }}
                >
                    <div
                        className="alert alert-danger d-flex justify-content-center align-items-center" role="alert"
                        style={{
                            position: 'absolute',
                            top: '50%', // Center it vertically within the container
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                        }}
                    >
                        <p className="mb-0">Error: {error.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContainerContent;
