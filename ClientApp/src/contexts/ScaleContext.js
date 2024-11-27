import { createContext, useContext } from 'react';
import useFetchData from '../hooks/useFetchData';

const ScaleContext = createContext();

const ScaleProvider = ({ children }) => {
    const { fetchData, data, loading, error } = useFetchData();

    return (
        <ScaleContext.Provider value={{ fetchData, data, loading, error }}>
            {children}
        </ScaleContext.Provider>
    );
}

const useScale = () => {
    return useContext(ScaleContext);
}

export {ScaleProvider, useScale};