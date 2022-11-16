
function MyName(props) {
    return(
    <div> <b>MyName:</b> {props.userName}
    <button onClick={function () {props.alertName(props.userName)}} > 
        button 
    </button>
    </div>
    )
}

export default MyName;