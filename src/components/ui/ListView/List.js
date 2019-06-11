import React from 'react'
import styled from 'styled-components'

class List extends React.Component {
    render() {

        const { children } = this.props;
        return (
            <Ul {...this.props}>
                {children}
            </Ul>
        );
    }
}

const Ul = styled.ul`
    margin: 0;
    padding: 0 0 15px 0;
    display: block;
    width: 100%;
`;


export default List;