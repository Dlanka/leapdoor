import React from 'react';
import styled from 'styled-components';

import { Block,Text, Span } from '../../ui';

const EduBlock = styled(Block)`
    
    :not(:last-child) {
        margin-bottom:40px;
    }
`;

const EducationBlock = (props) => {
    return (
        <EduBlock >
            <Text variant="h4" weight="bold" color="primary">{props.degree}</Text>
            <Text variant="h5" color="light" mt="10px">
                <Span>{props.school}</Span>
                <Span ml="40px" weight="medium">{props.start} - {props.end}</Span>
            </Text>
            <Text mt="15px" variant="p" >{props.description}</Text>
        </EduBlock>
    )
}

export default EducationBlock
