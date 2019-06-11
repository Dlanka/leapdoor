import React, { Component } from 'react'
import styled from 'styled-components';

import * as theme from '../../theme';


const Div = styled.div`
    display: 'block',
,`;

const DefaultInput = styled.input`
    border: none;
    padding: 5px 20px;
    font-size: 16px;
    outline: none;
    width:${props => props.block ? props.block : 'initial'};
    border-radius:20px;
    border: 1px solid ${props => !props.valid && props.touched ? theme.colors.danger : theme.colors.secondary}


`;


export default class Input extends Component {


    render() {

        const { className, type, placeholder } = this.props;

        return (
            <Div>
                <DefaultInput
                    {...this.props}
                    className={[className].join(" ")}
                    type={type}
                    placeholder={placeholder}
                />

            </Div>
        );


    }
}
