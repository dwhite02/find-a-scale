import React from 'react';
import SearchBar from "./SearchBar";
import ScaleContentDisplay from "./ScaleContentDisplay";
import Piano from './Piano';
import {ScaleProvider} from '../contexts/ScaleContext';


const SearchScaleView = () => {
    return (
        <ScaleProvider>
            <SearchBar/>
            <ScaleContentDisplay/>
            <Piano/>
        </ScaleProvider>
    )
}

export default SearchScaleView;