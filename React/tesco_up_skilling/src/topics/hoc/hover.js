import Wrapper from "./wrapper";
const Hover = (props) => {
    return (
        <h2 onMouseOver={props.increaseCounter}>Hover {props.counter} Times</h2>
    )
}
export default Wrapper(Hover);