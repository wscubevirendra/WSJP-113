

function Btn(props) {
    return (
        <button className={`${props.age >= 18 ? 'bg-primary' : 'bg-danger'}`}>{props.age >= 18 ? "Adult" : "Minor"}</button>

    )
}


export default Btn;
