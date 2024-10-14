import React from "react";
import "./RootNote.scss"

const RootNote = ({ scaleData }) => {
    scaleData = scaleData.musicItem;

    return (
        <div className="component1-key">
            <h2 className="component1-key__title"> {scaleData.note.charAt(0).toUpperCase() + scaleData.note.slice(1)} </h2>
            <span className="component1-key__tag"> {scaleData.scaleType} </span>
        </div>
    )
}

export default RootNote;