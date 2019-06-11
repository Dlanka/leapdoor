import React, { Component } from 'react';
import styled from 'styled-components';

import '../../styles/colors.css';
import { classList } from '../../utility/utility';


const Div = styled.div`
    margin-right:${props => props.mr ? props.mr : ""};
    margin-top:${props => props.mt ? props.mt : ""};
    margin-bottom:${props => props.mb ? props.mb : ""};
    margin-left:${props => props.ml ? props.ml : ""};
    padding-right:${props => props.pr ? props.pr : ""};
    padding-top:${props => props.pt ? props.pt : ""};
    padding-bottom:${props => props.pb ? props.pb : ""};
    padding-left:${props => props.pl ? props.pl : ""};
    text-align:${props => props.textalign ? props.textalign : ""};
`;

export default class Block extends Component {

    render() {

        const { row,
            col,
            xs,
            sm,
            md,
            lg,
            align,
            justify,
            color,
            className,
            style,
            children
        } = this.props;

        const _col = col && col.length > 0 ? `col-${col}` : 'col';

        const classes = classList({
            'row': row,
            [_col]: col && _col,
            [`col-xs-${xs}`]: col && xs,
            [`col-sm-${sm}`]: col && sm,
            [`col-md-${md}`]: col && md,
            [`col-lg-${lg}`]: col && lg,
            [`justify-content-${justify}`]: row && justify,
            [`align-items-${align}`]: row && align,
            [color]: color && color.length > 0
        })

        return (
            <Div {...this.props} className={[classes, className].join(' ')} style={style}>
                {children}
            </Div>
        )
    }
}
