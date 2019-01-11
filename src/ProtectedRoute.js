import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, string, func } from 'prop-types';

class ProtectedRoute extends Component {
    static propTypes = {
        isAuthenticated: bool.isRequired,
        redirectTo: string.isRequired,
        component: func
    };

    static defaultProps = {
        isAuthenticated: false,
        redirectTo: '/'
    };

    render() {
        const { isAuthenticated, redirectTo, component: ProtectedComponent, ...rest } = this.props;

        if (!isAuthenticated) {
            return <Redirect to={redirectTo} />;
        }

        return <Route render={props => (<ProtectedComponent {...props} />)} {...rest} />;
    }
}

export default ProtectedRoute;