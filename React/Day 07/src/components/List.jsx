import React from 'react'

export default function List(props) {
  
    return (
        <ul className="list-group">
            {
                props.list.map((data, index) => {
                    return (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center py-3 rounded-3 mb-2 shadow-sm">
                            <span className="fw-semibold">{data}</span>
                            <button onClick={() => props.removeItem(index)} className="btn btn-sm btn-danger px-3 rounded-pill">
                                Delete
                            </button>
                        </li>
                    )
                })
            }

        </ul>
    )
}
