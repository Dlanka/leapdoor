import React from 'react'

import styled from 'styled-components';

import Text from './Text';

const Error = styled(Text)`
    color:red;
    padding:0 20px;
`;

const ErrorText = (props) => {
    return (
        <React.Fragment>
            {props.children ? (
                <Error>
                    {props.children}
                </Error>
            ) :
                null
            }
        </React.Fragment>
    )
}

export default ErrorText
