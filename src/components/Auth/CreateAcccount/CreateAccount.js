import React, { Component } from 'react';
// import styled from 'styled-components';

import * as theme from '../../../theme';

import { Block, Text, Card } from '../../ui';
import { Tabs, Tab } from '../../ui/Tab';

import JobSeekerForm from './JobSeekerForm/JobSeekerForm';
import EmployerForm from './EmployerForm/EmployerForm';
import AuthContext from '../../../context/AuthContext';

class CreateAccount extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.tabRef = React.createRef();

        this.state = {
            isJobSeeker: true
        };

       
    }


    onTabClick = () => {
        console.log(this.tabRef.current)
    }

    onSubmit = (formData) => {
        console.log(formData)
        this.context.onCreateAccount(formData)
    }

    render() {
       
        return (
            <Card col="6" pl="0" pr="0" mb="30px" pt="50px" pb="50px" rounded={`${theme.sizes.radius}`} >

                <Block col mb="60px">
                    <Text variant="h1" align="center">Sign Up</Text>
                </Block>

                <Block col>
                    <Block row>

                        <Tabs activeColor={theme.colors.primary} borderColor={theme.colors.exlight}>

                            <Tab active label="Job Seeker">
                                <JobSeekerForm onSubmit={this.onSubmit} />
                            </Tab>

                            <Tab label="Enterprise">
                                <EmployerForm />
                            </Tab>

                        </Tabs>

                    </Block>
                </Block>

            </Card>
        )
    }
}

export default CreateAccount;

