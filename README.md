react-protected-route
============================

[![npm version](https://badge.fury.io/js/react-protected-route.svg)](https://badge.fury.io/js/react-protected-route)
[![Build Status](https://travis-ci.com/devbytecom/react-protected-route.svg?branch=master)](https://travis-ci.com/devbytecom/react-protected-route)
[![NPM Packages](https://david-dm.org/devbytecom/react-protected-route.svg)](https://david-dm.org/devbytecom/react-protected-route)
[![NPM Dev Dependencies](https://david-dm.org/devbytecom/react-protected-route/dev-status.svg)](https://david-dm.org/devbytecom/react-protected-route?type=dev)

A ReactJS route component that redirects users trying to access a protected route.

# Example
The code below assumes `isAuthenticated` is `true`, and will render the protected route.
```js
import ProtectedRoute from "react-protected-route";

// this can be read from your state which looks at 
// login and/or any logic to protect certain routes.
const isLoggedIn = false; 

// Example usage
const Routes = () => 
<Switch>
    <ProtectedRoute
        isAuthenticated={isLoggedIn}
        redirectTo="/login"
        path="/myaccount"
        component={() => <p>Protected account access</p>}
    />
    <Route
        path="/login"
        render={() => <p>Please sign in to access your account.</p>}
    />
</Switch>;
```