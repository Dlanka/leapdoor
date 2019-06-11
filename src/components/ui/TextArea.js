import React from 'react'
import styled from 'styled-components';
const TextAreaContainer = styled.div`
    
`;
const TextArea = (props) => {
    return (
        <TextAreaContainer>
            <textarea>{props.children}</textarea>
        </TextAreaContainer>
    )
}

export default TextArea
