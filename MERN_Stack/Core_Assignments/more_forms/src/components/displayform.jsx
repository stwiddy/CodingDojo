import React from 'react'

const Display = (props) => {
    return (
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Confirm Password: {props.confirmPassword}</p>
            <p>Password: {props.password}</p>
        </div>
    )
}

export default Display