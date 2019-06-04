react-protected-route
============================

[![npm version](https://badge.fury.io/js/react-protected-route.svg)](https://badge.fury.io/js/react-protected-route)
[![Build Status](https://travis-ci.com/devbytecom/react-protected-route.svg?branch=master)](https://travis-ci.com/devbytecom/react-protected-route)
[![NPM Packages](https://david-dm.org/devbytecom/react-protected-route.svg)](https://david-dm.org/devbytecom/react-protected-route)
[![NPM Dev Dependencies](https://david-dm.org/devbytecom/react-protected-route/dev-status.svg)](https://david-dm.org/devbytecom/react-protected-route?type=dev)

A ReactJS route component that redirects users trying to access a protected route.

# Example
```js
import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "react-protected-route";

// this can be read from your state which looks at
// login and/or any logic to protect certain routes.
const isLoggedIn = false;

// Example usage
const Routes = () =>
<Switch>
    <Route path="/" render={() => <p>Homepage</p>} />
    <ProtectedRoute
        path="/myaccount"
        component={() => <p>Protected account access</p>}
        predicate={isLoggedIn} // only show when user is logged in
        redirectTo="/login" // otherwise redirect to '/login'
    />
    <ProtectedRoute
        path="/login"
        render={() => <p>Please sign in to access your account.</p>}
        predicate={!isLoggedIn} // only show when not logged in
        redirectTo="/" // otherwise redirect to '/'
        useFrom // unless ProtectedRoute recorded where they came from, then redirect to there
    />
</Switch>;
```
