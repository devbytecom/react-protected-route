import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, string } from 'prop-types';

class ProtectedRoute extends Component {
    static propTypes = {
        isProtected: bool.isRequired,
        redirectTo: string.isRequired
    };

    static defaultProps = {
        isProtected: false,
        redirectTo: '/'
    };

    render() {
        const { isProtected, redirectTo, component: ProtectedComponent, ...rest } = this.props;

        if (isProtected) {
            return <Redirect to={redirectTo} />;
        }

        return <Route render={props => (<ProtectedComponent {...props} />)} {...rest} />;
    }
}

export default ProtectedRoute;