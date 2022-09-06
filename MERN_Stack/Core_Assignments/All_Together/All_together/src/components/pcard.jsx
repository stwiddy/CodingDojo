import React, { Component } from 'react';

class pecard  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        const ageIncrase = () => {
            this.setState({ age: this.state.age + 1})
        }
        return (
            <div>
                <h1>{ firstName }, { lastName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ageIncrase}>Birthday Button for { firstName } { lastName }</button>
            </div>
        );
    }
}
export default pecard;