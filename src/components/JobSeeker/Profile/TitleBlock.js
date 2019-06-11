import React from 'react';
import styled from 'styled-components';
import { Block, Text } from '../../ui';

import plusSVG from '../../../images/icons/plus.svg'

const MainBlock = styled(Block)`
    padding:0 40px 60px;
    border-left:1px solid #000;
    ::before {
        position: absolute;
        content:"";
        height:10px;
        width:10px;
        background:#000;
        left:10px;
        border-radius:50%;
    }
`;

const AddButton =styled.span`
    width: 30px;
    height: 30px;
    cursor:pointer;
    background-color: rgba(0,0,0,1);
    background-repeat: no-repeat;
    background-position: 7px 7px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
    margin-left: 40px;
    background-image:url(${plusSVG});
`;


const TitleBlock = (props) => {
    return (
        <MainBlock>
            <Block row >
                <Block col="12">
                    <Text variant="h2"  mt="-5px">
                        <span> {props.title}</span>
                        <AddButton onClick={props.onAddClick}>
                            
                        </AddButton>
                    </Text>
                </Block>
                <Block col="12" mt="40px">
                    {props.children}
                </Block>
            </Block>
        </MainBlock>
    )
}

export default TitleBlock
