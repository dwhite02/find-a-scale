import React, { useState, useEffect} from 'react';
import { useScale } from "../../contexts/ScaleContext";
import './Piano.scss';

const sharpToFlat = {
    "C": "Dbb",
    "C#": "Db",
    "D": "Ebb",
    "D#": "Eb",
    "E": "Fb",
    "F": "Gbb",
    "F#": "Gb",
    "G": "Abb",
    "G#": "Ab",
    "A": "Bbb",
    "A#": "Bb",
    "B": "Cb"
};

const flatToSharp = {
    "C": "B#",
    "Db": "C#",
    "D": "C##",
    "Eb": "D#",
    "E": "D##",
    "F": "E#",
    "Gb": "F#",
    "G": "F##",
    "Ab": "G#",
    "A": "G##",
    "Bb": "A#",
    "B": "A##"
};

const Piano = () => {
    const [piano, setPiano] = useState('');
    const [scale, setScale] = useState('');
    const [isFlat, setIsFlat] = useState(false);
    const scaleData = useScale().data;
    
    useEffect(() => {
        const { musicalNotes = [], scaleList = [], hasFlats = "" } = scaleData?.musicItem || {};
        setPiano(musicalNotes);
        setScale(scaleList);
        setIsFlat(hasFlats);
    }, [scaleData]); // Only run this effect when scaleData changes

    function isPressed(key, scale) {
        const obj = isFlat ? sharpToFlat : flatToSharp;
        const altKey = obj[key];

        if (scale.includes(key)) {
            return true;
        } else if (scale.includes(altKey)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            {
                piano.length ? (
                    <div className="piano">
                        {piano.map((key) => (
                            <div
                                key={key}
                                className={`key ${key.includes('#') || key.includes('b') ? 'key--black' : 'key--white'} ${isPressed(key, scale) ? 'key--pressed' : '' }`}
                            >
                                <span className='key__text'>{key}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default Piano;
