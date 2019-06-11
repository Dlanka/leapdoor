import React from 'react';
import styled from 'styled-components';
import * as theme from '../../theme';

const SpanBlock = styled.span`
    display:inline-block;
    margin:${props => props.margin ? props.margin : "0"};
    margin-top:${props => props.mt ? props.mt : ""};
    margin-bottom:${props => props.mb ? props.mb : ""};
    margin-left:${props => props.ml ? props.ml : ""};
    margin-right:${props => props.mr ? props.mr : ""};
    font-weight:${props => props.weight ? theme.sizes[props.weight] :  ""};
`;

const Span = (props) => {
    return (
        <SpanBlock {...props}>{props.children}</SpanBlock>
    )
}

export default Span;