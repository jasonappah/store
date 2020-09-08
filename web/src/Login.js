import React, {Component} from 'react';
import {Button} from "@chakra-ui/core";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {authed: false}
    }

    render() {
        return (
            <Button onClick={this.toggleAuth} variantColor="teal" size="md">{(this.state.authed) ? "Log Out" : "Log In"}</Button>
        )
    }

    toggleAuth() {
        if (this.state.authed) {
            this.setState({authed: false})
        } else {
            this.setState({authed: true})
        }
    }

    componentDidMount() {

    }
}

export default Login;