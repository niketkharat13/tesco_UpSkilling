import React from 'react';
const Wrapper = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                counter: 0
            }
            this.increaseCounter = this.increaseCounter.bind(this)
        }
        increaseCounter() {
            this.setState(prevState => ({counter: prevState.counter + 1}))
        }
        render() {
            return <WrappedComponent counter={this.state.counter} {...this.props} increaseCounter={this.increaseCounter} />
        }
    }
}

export default Wrapper;