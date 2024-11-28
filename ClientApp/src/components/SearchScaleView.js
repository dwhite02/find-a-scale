import React from 'react';
import SearchBar from "./SearchBar";
import ContainerContent from './ContainerContent';
import { ScaleProvider} from '../contexts/ScaleContext';


const SearchScaleView = () => {

    return (
        <ScaleProvider>
            <SearchBar/>
            <ContainerContent/>
        </ScaleProvider>
    )
}

export default SearchScaleView;