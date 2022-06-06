import Child from './child';
const Parent = () => {
    return (
        <Child render={() => {
            return <h1>This is render props from parent</h1>
        }} />
    )
}
export default Parent;