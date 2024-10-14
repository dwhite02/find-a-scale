import React, { useState } from 'react';
import SearchBar from "./SearchBar";
import ScaleContentDisplay from "./ScaleContentDisplay";
import Piano from './Piano';

const SearchScaleView = () => {
    const [data, setData] = useState(null); // State for fetched object data
    const [loading, setLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to handle errors

    return (
        <div>
            <SearchBar onLoading={setLoading} onDataLoad={setData} onGetError={setError}/>
            <ScaleContentDisplay scaleData={data} isLoading={loading} isError={error}/>
            <Piano scaleData={data}/>
        </div>
    )
}

export default SearchScaleView;