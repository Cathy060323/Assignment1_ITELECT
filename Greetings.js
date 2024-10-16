function Greetings(props){
    return(
        <div>
            <h2 className="call-text">Hello, {props.user}</h2>
        </div>
    );
}
export default Greetings;