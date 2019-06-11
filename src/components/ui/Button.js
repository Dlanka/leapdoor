import React, { Component } from 'react';
import styled from 'styled-components';
import * as theme from '../../theme';

const DefaultButton = styled.button`
    border-radius: 20px;
    font-size: 16px;
    letter-spacing: 4px;
    border: none;
    outline: 0;
    background: ${props => props.primary ? "#000 " : theme.colors.gray};
    color:${props => props.primary ? "#fff " : "#000"};
    margin:${props => props.margin ? props.margin : "" };
    padding:${props => props.padding || "8px 30px" };
    width: ${props => props.block ? "100%" : "initial"}
    :hover {
       opacity:0.7
    }
`;

const SmallButton = styled(DefaultButton)`
    font-size:14px;
    padding:${props => props.padding || "5px 14px" };
`;


export default class Button extends Component {
    render() {

        const {small,children } = this.props;

        const ComponentBtn = small ? SmallButton : DefaultButton;

        return (
            <ComponentBtn {...this.props}>{children}</ComponentBtn>
        )
    }
}
