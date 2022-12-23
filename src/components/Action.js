import React from "react";
const Action = (props) => {
    return (
        <div>
            <button className="big-button" disabled={!props.hasOption} onClick={props.pickbook}>Help me decide a book</button>
        </div>
    )
}
export default Action;