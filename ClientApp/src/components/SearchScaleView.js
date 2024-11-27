import React from 'react';
import SearchBar from "./SearchBar";
import ScaleContentDisplay from "./ScaleContentDisplay";
import Piano from './Piano';
import {ScaleProvider} from '../contexts/ScaleContext';


const SearchScaleView = () => {
    // const [data, setData] = useState(null); // State for fetched object data
    // const [loading, setLoading] = useState(false); // State to indicate loading status
    // const [error, setError] = useState(null); // State to handle errors

    return (
        <ScaleProvider>
            <SearchBar/>
            <ScaleContentDisplay/>
            <Piano/>
        </ScaleProvider>
    )
}

export default SearchScaleView;