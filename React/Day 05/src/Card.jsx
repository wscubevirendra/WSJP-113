import { useState } from "react";

function Card() {
    const [toggle, setToggle] = useState(true);

    function toggleHandler() {
        setToggle(!toggle)
    }

    return (
        <div style={{
            background: toggle ? "red" : "green"
        }} className="card">
            <button onClick={toggleHandler}>{toggle ? "Red" : "Green"}</button>
        </div>
    )
}


export default Card;