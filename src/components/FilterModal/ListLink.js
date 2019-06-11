import React, { Component } from 'react'
import styled from 'styled-components';

import * as theme from '../../theme';
import { Block, Text } from '../ui';

const Link = styled(Block)`
    margin-bottom: 8px;
    cursor: pointer;
`;

const LinkText = styled(Text)`
    :hover {
        color:${theme.colors.primaryTextColor}
    }
`;

export default class ListLink extends Component {
  render() {
    return (
        <Link col="3" {...this.props}>
            <LinkText variant="title">{this.props.children}</LinkText>
        </Link>
    )
  }
}
