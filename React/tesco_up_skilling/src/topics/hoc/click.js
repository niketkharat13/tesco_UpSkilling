import Wrapper from "./wrapper";
const Hover = (props) => {
    return (
        <button onClick={props.increaseCounter}>Click {props.counter} Times</button>
    )
}
export default Wrapper(Hover);