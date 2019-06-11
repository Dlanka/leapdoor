import React from 'react';
import styled from 'styled-components';

import * as theme from '../../../theme';

const Li = styled.li`
    list-style: none;
    border-radius: ${props => props.rounded  ? theme.sizes.radius : '0'};
    cursor:${props => props.pointer ? 'pointer' : 'auto'}
`;


const Item = (props) => {

    return (
        <Li {...props}>{props.children}</Li>
    );
};

export default Item;