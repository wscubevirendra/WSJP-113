'use client'

import React,{useState} from 'react'

export default function Count() {
    const [count,setCount]=useState(10)

    function incHandler(){
        setCount(count+1)
    }
    return (
        <div className="card">
            <button onClick={incHandler}>+</button>
            <h2>{count}</h2>
            <button>+</button>
        </div>
    )
}
