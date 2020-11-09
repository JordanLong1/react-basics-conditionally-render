import React from 'react'

const LoginButton = (props) => {
    console.log(props.onClick)
    return (
        <div>
            <label>Login</label>
            <button onClick={props.onClick}>LOGIN!</button>
        </div>
    )
}

export default LoginButton