import React, { Component } from 'react'
import { Block, Text } from '../../components/ui';

export default class Error extends Component {
    render() {
        return (
            <div className="container">
                <Block row align="center" justify="center">
                    <Block col="12" mt="100px">
                        <Text variant="h2" align="center">404 Page not found</Text>
                    </Block>
                </Block>
            </div>
        )
    }
}
