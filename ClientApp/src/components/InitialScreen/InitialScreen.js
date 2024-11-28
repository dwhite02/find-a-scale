import React from 'react';
import './InitialScreen.scss'

const InitialScreen = ({onClick}) => {
    return (
        <>
            <div className='vh-100 d-flex justify-content-center align-items-center px-4'>
                <div className='d-flex callout-hero'>
                    <div className='callout-hero__content'>
                        <h1 className='headline headline--splash'> Find A  Scale </h1>
                        <button className='btn btn-dark ' onClick={onClick}> Go Find Your Scale</button>
                    </div>
                    <div className='callout-hero__image'>
                        <span class="loader"></span>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default InitialScreen;