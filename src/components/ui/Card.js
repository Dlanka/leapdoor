import React, { Component } from 'react';
import styled from 'styled-components';

import * as theme from '../../theme';

import Block from './Block';

const CardBlock = styled(Block)`
    background:${theme.colors.bg}
    border-radius:${props => props.rounded ? props.rounded : ""}
`;

export default class Card extends Component {
    render() {
        return (
            <CardBlock {...this.props} >
                {this.props.children}
            </CardBlock>
        )
    }
}
