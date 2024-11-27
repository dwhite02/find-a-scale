import React from 'react';

const InitialScreen = ({onClick}) => {
    return (
        <>
            <div>
                <h1> Find A Scale </h1>
                <button onClick={onClick}> Go Find Your Scale</button>
            </div>
        </>
    )
}

export default InitialScreen;