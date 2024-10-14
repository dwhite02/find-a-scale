import React from 'react';
import MusicalNotes from "../../data/MusicalNotes";

const GenerateRandomScale = ({ onGenerate, selectOptions }) => {
    const handleGenerate = () => {
        const randomIndexScale = Math.floor(Math.random() * selectOptions.length);
        const randomIndexNote = Math.floor(Math.random() * MusicalNotes.length);
        const noteValue = MusicalNotes[randomIndexNote];
        const scaleValue = selectOptions[randomIndexScale].value;

        onGenerate(scaleValue, noteValue);
    };

    return (
        <button className="btn btn-outline-dark" type="button" onClick={handleGenerate}>
            Generate Random Scale
        </button>
    );
};

export default GenerateRandomScale;