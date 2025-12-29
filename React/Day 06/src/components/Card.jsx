import React, { useState } from 'react'
import { SlLike } from "react-icons/sl";
import { AiOutlineDislike } from "react-icons/ai";



export default function Card(props) {
    const [like, setLike] = useState(false);

    function toggleHandler() {
        setLike(!like)
    }
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card h-100">
                <img
                    height={"200"}
                    src={props.image}
                    className="card-img-top"
                    alt="Produk 1"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>

                    <div className="mt-auto d-flex justify-content-between">
                        <button
                            className="btn btn-primary detail-btn">
                            $ {props.price}
                        </button>
                        <button onClick={toggleHandler}
                            className={`btn ${like ? 'btn-primary' : 'btn-danger'  } detail-btn`}>
                            {
                                like ?

                                    <SlLike />
                                    :
                                    <AiOutlineDislike  />

                            }

                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
