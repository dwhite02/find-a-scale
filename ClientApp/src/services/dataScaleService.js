const fetchData = async (scale, note) => {
    try {
        const response = await fetch(`scalefinder/${scale}/${note}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        return { data: result, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

export default fetchData;