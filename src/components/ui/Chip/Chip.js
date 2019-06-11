import React from 'react';
import styled from 'styled-components';

import * as theme from '../../../theme';

import { Text } from '../../ui';

const ChipBlock = styled.div`
    background:${props => props.active ? theme.colors.gray : ""};
    border:1px solid ${theme.colors.gray};
    display:inline-block;
    border-radius:21px;
    padding:5px 30px;
    cursor:pointer;
    margin-right:15px
`;

const InnerText = styled(Text)`

color:${props => props.active === true ? theme.colors.secondTextColor : theme.colors.thirdTextColor}
`;

export default class Chip extends React.Component {

    onSelect = () => {

        if(this.props.onClick) {
            this.props.onClick();
        }

        if(this.props.hasParent) {
            this.props.callToParent(this.props);
        } 

        
    }
    render() {

        const { hasParent, children, ...props } = this.props;

        return (
            <ChipBlock  {...props} onClick={this.onSelect} active={this.props.active}>
                <InnerText
                    variant="caption"
                    active={this.props.active}>{children}</InnerText>
            </ChipBlock>
        );
    }
}