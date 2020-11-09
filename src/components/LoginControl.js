import React from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {Greeting} from './Greeting'
class LoginControl extends React.Component {

    state = {isLoggedIn: false}
    handleToggle = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleToggle} />;
        } else {
          button = <LoginButton onClick={this.handleToggle} />;
        }

        return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>

        )
    }
}

export default LoginControl