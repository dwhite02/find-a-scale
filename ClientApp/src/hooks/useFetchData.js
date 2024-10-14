import { useState } from 'react';
import dataScaleService from '../services/dataScaleService';

const useFetchData = (onDataLoad) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (scale, note) => {
        setLoading(true);
        
        const { data, error } = await dataScaleService.fetchData(scale, note);
        if (error) {
            setError(error); // Reset error state on new fetch
            onDataLoad(null);
        } else {
            onDataLoad(data);
            setError(null);
        }
        setLoading(false);
    };

    return { fetchData, loading, error };
};

export default useFetchData;