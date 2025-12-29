function User(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.path} alt="" />
            <div>
                <h4>{props.name}</h4>
                <button style={
                    {
                        background: props.age >= 18 ? "green" : "red"
                    }
                }>{props.age >= 18 ? "Allow " : "Not Allow"}</button>
            </div>
        </div>

    )
}

export default User