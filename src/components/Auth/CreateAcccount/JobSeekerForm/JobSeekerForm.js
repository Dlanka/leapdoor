import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import { Block, Input, Button, ErrorText, Form } from '../../../ui';
import { convertFormObjToArray, getFormValues } from '../../../../utility/utility';
import { checkValidity, isFormValid } from '../../../../utility/validation';

class JobSeekerForm extends Component {

    state = {
        jobseekerForm: {
            firstName: {
                value: '',
                type: 'text',
                label: 'First Name *',
                valid: false,
                touched: false,
                validation: { required: true },
                mb: 20
            },
            lastName: {
                value: '',
                type: 'text',
                label: 'Last Name *',
                valid: false,
                touched: false,
                validation: { required: true },
                mb: 20
            },
            email: {
                value: '',
                type: 'text',
                label: 'Email *',
                valid: false,
                touched: false,
                validation: { required: true, email: true },
                mb: 20
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password *',
                valid: false,
                touched: false,
                validation: { required: true, minLength: 6 },
                mb: 20
            },
            rePassword: {
                value: '',
                type: 'password',
                label: 'Re-Password *',
                valid: false,
                touched: false,
                validation: { required: true, matchTo: 'password' },
                mb: 0
            },
        },
        error: {},
        isFormValid: false
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { isFormValid, jobseekerForm } = this.state;

        if (!isFormValid) {
            return;
        }

        const formValues = getFormValues(
            jobseekerForm,
            ['email', 'lastName', 'firstName', 'password']
        );

        this.props.onSubmit({ ...formValues, userType: 0 });

    }

    onChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;
        const { jobseekerForm, error } = this.state;

        const checkvalidation = checkValidity(value, jobseekerForm[name].validation, jobseekerForm);

        const updateForm = {
            ...jobseekerForm,
            [name]: {
                ...jobseekerForm[name],
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
            jobseekerForm: updateForm,
            error: _error,
            isFormValid: isFormValid(updateForm)
        })

    }

    render() {

        return (
            <Form onSubmit={this.onSubmit}>
                <Block row justify="center" pt="50px">

                    {
                        convertFormObjToArray(this.state.jobseekerForm).map(({ key, config }) => {
                            return (
                                <Block col="9" mb={config.mb + "px"} key={key + '_form'}>
                                    <Input
                                        block="100%"
                                        name={key}
                                        type={config.type}
                                        valid={config.valid}
                                        touched={config.touched}
                                        value={config.value}
                                        onChange={this.onChange}
                                        placeholder={config.label} />
                                    <ErrorText>{this.state.error[key]}</ErrorText>
                                </Block>
                            )
                        })
                    }

                    <Block col="7" mt="40px">
                        <Block row justify="center">

                            <Block col="12" >
                                <Button type="submit" block primary>Create</Button>
                            </Block>

                            <Block col="12" mt="10px">
                                <Button block onClick={() => { this.props.history.push('/auth/login'); }}>Cancel</Button>
                            </Block>

                        </Block>
                    </Block>

                </Block>
            </Form>
        )
    }
}

export default withRouter(JobSeekerForm);