import React, { Component } from 'react';
import styled from 'styled-components';

import * as theme from '../../../theme';

import { Block, Text, Input, Card, Button, Form, ErrorText } from '../../ui';
import AuthContext from '../../../context/AuthContext';
import { getFormValues } from '../../../utility/utility';
import { checkValidity } from '../../../utility/validation';

const FrogotLink = styled(Text)`
    cursor:pointer;
    :hover {
        text-decoration: underline;
    }
    
`;

class Login extends Component {

    static contextType = AuthContext;

    state = {
        loginForm: {
            email: {
                value: 'darsjaak2w@gmail.com',
                type: 'text',
                label: 'Email',
                valid: false,
                touched: false,
                validation: { required: true, email: true }
            },
            password: {
                value: 'asasasas',
                type: 'password',
                label: 'Password',
                valid: false,
                touched: false,
                validation: { required: true, minLength: 6 }
            }
        },
        error: {},
        isFormValid: false
    }

    componentDidMount() {
        this.setState({ formIsValid: this.isFormValid(this.state.loginForm) });

        if (this.context.isAuth) {
            this.props.history.push('/job');
        }
    }

    isFormValid = (formObj) => {

        let formIsValid = true;

        for (let key in formObj) {

            if (formObj[key].value !== '') {
                formObj[key].valid = true;
                formObj[key].touched = true;
            }

            formIsValid = formObj[key].valid && formIsValid;
        }

        return formIsValid;
    }

    onCreateAccount = () => {
        this.props.history.push('/auth/create');
    }

    onLogin = (e) => {
        e.preventDefault();

        if (!this.state.formIsValid) {
            return;
        }

        let submitForm = getFormValues(this.state.loginForm);
        this.context.onLogin(submitForm)
            .catch(e => {
                this.setState({ error: e })
            });

    }

    onChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;
        const { loginForm, error } = this.state;

        const checkvalidation = checkValidity(value, loginForm[name].validation);

        const updateLoginForm = {
            ...loginForm,
            [name]: {
                ...loginForm[name],
                value: value,
                touched: true,
                valid: checkvalidation.valid
            }
        }

        const _error = {
            ...error,
            [name]: checkvalidation.error
        }

        this.setState({
            loginForm: updateLoginForm,
            error: _error,
            formIsValid: this.isFormValid(updateLoginForm)
        });

    }



    render() {

        const { loginForm } = this.state;
        const form = [];

        for (let key in loginForm) {
            form.push({
                key: key,
                config: loginForm[key]
            });
        }


        return (
            <Card col="6" pt="50px" pb="50px" rounded={`${theme.sizes.radius}`} >
                <Block col mb="60px">
                    <Text variant="h1" align="center">Sign In</Text>
                </Block>
                <Block col>
                    <Form onSubmit={this.onLogin}>
                        <Block row justify="center">
                            {
                                form.map(({ key, config }) => {

                                    return (
                                        <Block key={key} col="9" mb="20px">
                                            <Input
                                                block="100%"
                                                name={key}
                                                type={config.type}
                                                placeholder={config.label}
                                                valid={config.valid}
                                                touched={config.touched}
                                                value={config.value}
                                                onChange={this.onChange}
                                            />
                                            <ErrorText>{this.state.error[key]}</ErrorText>
                                        </Block>
                                    )
                                })


                            }

                            <Block col="9">
                                <FrogotLink variant="h6" ml="5px" pointer>Frogot Password</FrogotLink>
                            </Block>

                            <Block col="7" mt="40px">
                                <Block row justify="center">

                                    <Block col="12" >
                                        <Button type="submit" block primary>Sign In</Button>
                                    </Block>

                                    <Block col="12" mt="10px">
                                        <Button type="button" block onClick={this.onCreateAccount}>Create an Account</Button>
                                    </Block>

                                </Block>
                            </Block>



                        </Block>
                    </Form>
                </Block>
            </Card>
        )
    }
}

export default Login;