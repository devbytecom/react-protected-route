import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProtectedRoute extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        redirectTo: PropTypes.string,
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    };

    static defaultProps = {
        isAuthenticated: false,
        redirectTo: '/'
    };

    render() {
        const { isAuthenticated, redirectTo, component: ProtectedComponent, ...rest } = this.props;

        return <Route {...rest} render={props => (isAuthenticated ? <ProtectedComponent {...props} /> : <Redirect to={redirectTo} />)} />;
    }
}

export default ProtectedRoute;