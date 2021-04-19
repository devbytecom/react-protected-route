import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderProps from 'render-props';

export default function ProtectedRoute({
  predicate,
  redirectTo,
  component,
  render,
  children,
  useFrom,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        if (predicate) {
          if (React.isValidElement(children)) return children;
          else return renderProps(component || children || render, props);
        } else {
          const { state } = props.history.location;
          const newLocation = {
            pathname: redirectTo,
            ...(useFrom && state && state.from),
            state: { from: props.location },
          };
          return <Redirect to={newLocation} />;
        }
      }}
    />
  );
}
ProtectedRoute.propTypes = {
  predicate: PropTypes.bool,
  redirectTo: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
  useFrom: PropTypes.bool,
};
ProtectedRoute.defaultProps = {
  predicate: false,
  redirectTo: '/',
  useFrom: false,
};
