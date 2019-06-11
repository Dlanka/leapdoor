import React from 'react';

export default React.createContext({
    isAuth: null,
    userId: null,
    userType: null,
    onCheckAuth:() => {},
    onLogout:() => {},
    onCreateAccount: () => {},
    onLogin: () => {}

});
