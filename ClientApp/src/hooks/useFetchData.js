import { useState } from 'react';

const useFetchData = (onDataLoad) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (scale, note) => {
        setLoading(true);

        try {
            const response = await fetch(`scalefinder/${scale}/${note}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            onDataLoad(result);
            setError(null);
        } catch (error) {
            setError(error); // Reset error state on new fetch
            onDataLoad(null);
        }
        
        setLoading(false);
    };

    return { fetchData, loading, error };
};

export default useFetchData;