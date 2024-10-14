import React from "react";
import "./ScaleList.scss";

const ScaleList = ({ scaleData }) => {
    const { scaleList = [], romanNumerals = [], triadChords = [] } = scaleData?.musicItem || {};

    // Create a collection of music objects
    const musicCollection = scaleList.map((note, i) => ({
        note,
        numeral: romanNumerals[i] || 'N/A', // Default value if index is out of bounds
        triadChords: triadChords[i] || 'N/A' // Default value if index is out of bounds
    }));

    return (
        <div className="scale-list">
            {musicCollection.length ? (
                <ul className="scale-list__row">
                    {musicCollection.map((item, index) => (
                        <li className="scale-list__item" key={index}>
                            <span className="scale-list__numeral">{item.numeral}</span>
                            <span className="scale-list__note">{item.note}</span>
                            <div className="scale-list__chord">
                                {item.triadChords.map((chordNote, chordIndex) => (
                                    <span key={chordIndex} className="scale-list__chord__note">
                                        {chordNote}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="scale-list__empty">No items present.</p>
            )}
        </div>
    );
}

export default ScaleList;

