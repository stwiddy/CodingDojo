import React, { useState } from 'react';
import Display from './displayform';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        if(firstName.length > 2 && lastName.length > 2 && email.length < 5 && password.length < 8 && password !== confirmPassword){
            const newUser = { firstName, lastName, email, password, confirmPassword };
            console.log("Welcome", newUser);
            setHasBeenSubmitted(true);
        } else{
            alert("Invaild Form")
        }
    };


    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First name: </label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length === 0 || (firstName.length < 2 &&
                        <span style={{ color: "red"}}> First name must be at least 2 characters</span>)
                    }
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastName.length === 0 || (lastName.length < 2 &&
                        <span style={{ color: "red"}}> Last name must be at least 2 characters</span>)
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length === 0 || (email.length < 5 &&
                        <span style={{ color: "red"}}> Email must be at least 5 characters</span>)
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={(e) => setconfirmPassword(e.target.value)} />
                    {
                        password !== confirmPassword &&
                        <span style={{ color: "red"}}> Passwords must match</span>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    {
                        password.length === 0 || (password.length < 8 &&
                        <span style={{ color: "red"}}> Password must be at least 8 characters</span>)
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Display firstName={firstName} lastName={lastName} email={email} confirmPassword={confirmPassword} password={password} />
        </div>
    );
};

export default UserForm;