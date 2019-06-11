import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import AuthContext from './AuthContext';
import GlobalContext from './GlobalContext';
import API, { TOKEN_KEY } from '../axios';

class AuthGlobalState extends Component {

    static contextType = GlobalContext;

    state = {
        isAuth: false,
        userId: null,
        userType: null
    }

    componentWillMount() {
        this.updateAuth();
    }

    onLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.updateAuth();
    }

    updateAuth = () => {

        const auth = this.onIsAuth();

        this.setState({
            isAuth: auth.isAuth,
            userId: auth.userId,
            userType: auth.userType
        });

        if (!auth.isAuth) {
            this.props.history.push('/auth/login');
        }
    }

    onIsAuth = () => {
        const token = localStorage.getItem(TOKEN_KEY);
        let authObj = { isAuth: false, userId: null, userType: null };

        if (!token || token === '') {
            return authObj;
        }

        const decoded = jwt.decode(token);

        if (!decoded) {
            localStorage.removeItem(TOKEN_KEY);
            return authObj;
        }

        if (Date.now() >= decoded.exp * 1000) {
            localStorage.removeItem(TOKEN_KEY);
            return authObj;
        }

        return {
            isAuth: true,
            userId: decoded.userId,
            userType: decoded.userType
        };

    }

    onCreateAccount = (formData) => {
        API.post('/user/create', formData).then(user => {
            console.log(user.data)
        }).catch(({ response }) => {
            console.log(response)
        });

    }


    onLogin = (form) => {

        return new Promise((resolve, reject) => {

            API.post('/user/login', form)
                .then(({ data }) => {

                    if (!data) {
                        return;
                    }

                    const token = data.token;

                    localStorage.setItem(TOKEN_KEY, token);

                    const decoded = jwt.decode(token);

                    const isAuth = token && token !== '' ? true : false;

                    this.setState({
                        isAuth: isAuth,
                        userId: decoded.userId,
                        userType: decoded.userType
                    });
                    resolve(data);
                    this.props.history.push('/jobseeker');

                })
                .catch(({ response }) => {
                    reject(response.data);

                });

        })


    }



    render() {


        const { isAuth, userId, userType } = this.state;

        const { children } = this.props;

        return (

            <AuthContext.Provider value={
                {
                    isAuth: isAuth,
                    userId: userId,
                    userType: userType,
                    onCheckAuth: this.updateAuth,
                    onLogin: this.onLogin,
                    onCreateAccount: this.onCreateAccount,
                    onLogout: this.onLogout
                }
            }>
                {children}
            </AuthContext.Provider>
        );
    }
}

export default withRouter(AuthGlobalState); 