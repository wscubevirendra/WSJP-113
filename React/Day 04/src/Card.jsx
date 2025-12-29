import Btn from "./Btn";

function Card(props) {
    return (

        <div className="col-3">
            <div className="card" >
                <img height={"300"} src={props.path} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-between ">
                    <h4 className="card-title">{props.name}</h4>
                    <Btn age={props.age} />
                </div>
            </div>
        </div>
    )
}

export default Card;