import React from 'react'
import styled from 'styled-components';

const FormBlock = styled.form`
    display:block;
`;

const Form = (props) => {
    return (
        <FormBlock {...props}>
            {props.children}
        </FormBlock>
    )
}

export default Form;
