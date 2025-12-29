import React from 'react'

export default function Input({ type = "text", placeText = "Number", myclassName, search, setSearch }) {
    return (
        <div className="mb-3 text-center">
            <input value={search} onChange={(e) => {
                setSearch(e.target.value)
            }} type={type} className={`fs-3 p-2  ${myclassName}`} placeholder={placeText} />
        </div>
    )
}
