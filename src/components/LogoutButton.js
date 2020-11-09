import React from 'react'


const LogoutButton = (props) => {
    return (
        <div>
            <label>LogOut</label>
            <button onClick={props.onClick}>LogOut</button>
        </div>
    )
};

export default LogoutButton