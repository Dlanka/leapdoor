import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import  * as theme from '../../theme';

const textAlign = {
    center:'center',
    right:'right'
}

const CommonStyles = css`
    color: ${props => props.color ? theme.colors[props.color] : theme.colors.primaryTextColor };
    margin:${props => props.margin ? props.margin : "0"};
    margin-top:${props => props.mt ? props.mt : ""};
    margin-bottom:${props => props.mb ? props.mb : ""};
    margin-left:${props => props.ml ? props.ml : ""};
    margin-right:${props => props.mr ? props.mr : ""};
    text-align:${props => props.align ? textAlign[props.align] :  ""};
    font-weight:${props => props.weight ? theme.sizes[props.weight] :  ""};
`;


const H1 = styled.h1`
    ${theme.fonts.h1};
    ${CommonStyles};
`;

const H2 = styled.h2`
    ${theme.fonts.h2};
    ${CommonStyles};
`;

const H3 = styled.h3`
    ${theme.fonts.h3};
    ${CommonStyles};
`;

const H4 = styled.h4`
    ${theme.fonts.h4};
    ${CommonStyles};
    color: ${props => theme.colors[props.color] || theme.colors.thirdTextColor };
`;

const H5 = styled.h5`
    ${theme.fonts.h5};
    ${CommonStyles};
    color: ${props => theme.colors[props.color] ? theme.colors[props.color] : theme.colors.thirdTextColor };
`;

const H6 = styled.h6`
    ${theme.fonts.h6};
    ${CommonStyles};
    color: ${props => theme.colors[props.color] || theme.colors.thirdTextColor };
`;

const Title = styled.p`
    ${theme.fonts.title};
    ${CommonStyles} ;
    color: ${props => theme.colors[props.color] || theme.colors.thirdTextColor }
`;

const Caption = styled(Title)`
    ${theme.fonts.caption}
`;

const P = styled.p`
    ${theme.fonts.p};
    ${CommonStyles};
    color: ${props => theme.colors[props.color] || theme.colors.secondTextColor };
`;

const Span = styled.span`
    display:inline-block;
    ${theme.fonts.span}
    ${CommonStyles};
    font-size:${ props => props.size ? props.size+'px' :  ""};
    letter-spacing:${props => props.spacing || ""};
`;


const variantType = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    title: Title,
    caption: Caption
};


export default class Text extends Component {
    render() {

        const {
            variant,
            children
        } = this.props;

        const Typography = variantType[variant] ? variantType[variant] : Span;

        return <Typography {...this.props}>{children}</Typography>

    }
}
