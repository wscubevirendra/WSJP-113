import React, { useRef } from 'react'

export default function Input(props) {
    const inputRef = useRef();

    function handleAdd() {
        const value = inputRef.current.value;
        props.tudoAdd(value);
        inputRef.current.value = "";
    }

    return (
        <div className="input-group d-flex gap-2 mb-4">
            <input
                type="text"
                className=" rounded-start-4"
                placeholder="Enter your task..."
                ref={inputRef}



            />
            <button onClick={handleAdd} className="btn btn-primary px-4 ">Add</button>
        </div>
    )
}
