import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Block, Input, Button } from '../../../ui';

 class EmployerForm extends Component {
    render() {

        return (
            <Block row justify="center" pt="50px">

                <Block col="9" mb="20px">
                    <Input block="100%" placeholder="Company Name *" />
                </Block>

                <Block col="9" mb="20px">
                    <Input block="100%" placeholder="Email *" />
                </Block>

                <Block col="9" mb="15px">
                    <Input type="password" block="100%" placeholder="Password *" />
                </Block>

                <Block col="9" >
                    <Input type="password" block="100%" placeholder="Re-Password" />
                </Block>

                <Block col="7" mt="40px">
                    <Block row justify="center">

                        <Block col="12" >
                            <Button block primary>Create</Button>
                        </Block>

                        <Block col="12" mt="10px">
                            <Button block onClick={() => { this.props.history.push('/auth/login'); }}>Cancel</Button>
                        </Block>

                    </Block>
                </Block>

            </Block>
        )
    }
}

export default withRouter(EmployerForm);