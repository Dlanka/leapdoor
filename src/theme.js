
 const fontFamily = "'Montserrat', sans-serif";
const primary = '#000';

const colors = {
    primary: primary,
    secondary: '#F2E7E7',
    gray: '#EFEDF3',
    white: '#fff',
    primaryTextColor: primary,
    secondTextColor: 'rgba(0,0,0,0.86)',
    thirdTextColor: 'rgba(0,0,0,0.66)',
    light: 'rgba(0,0,0,0.56)',
    exlight: 'rgba(0,0,0,0.3)',
    danger: '#ef5d5d',
    // Background colors
    bg:'#fff'
}

const sizes = {
    h1: '34px',
    h2: '24px',
    h3: '18px',
    h4: '16px',
    h5: '14px',
    h6: '12px',
    p: '12px',
    a:'14px',
    title: '12px',
    caption: '12px',
    span:'12px',

    light:'300',
    regular:'400',
    medium:'500',
    bold:'700',

    radius:'10px'
}

const fonts = {
    h1: {
        fontFamily: fontFamily,
        fontSize: sizes.h1,
        fontWeight: 700,
        letterSpacing: '3px'
    },
    h2: {
        fontFamily: fontFamily,
        fontSize: sizes.h2,
        fontWeight: 700,
        letterSpacing: '3px'
    },
    h3: {
        fontFamily: fontFamily,
        fontSize: sizes.h3,
        fontWeight: 700,
        letterSpacing: '3px'
    },
    h4: {
        fontFamily: fontFamily,
        fontSize: sizes.h4,
        fontWeight: 400,
        letterSpacing: '3px'
    },
    h5: {
        fontFamily: fontFamily,
        fontSize: sizes.h5,
        fontWeight: 400,
        letterSpacing: '3px'
    },
    h6: {
        fontFamily: fontFamily,
        fontSize: sizes.h6,
        fontWeight: 400,
        lineHeight:1.6

    },
    title: {
        fontFamily: fontFamily,
        fontSize: sizes.title,
        fontWeight: 400,
        letterSpacing: '2px'
    },
    caption: {
        fontFamily: fontFamily,
        fontSize: sizes.caption,
        fontWeight: 700,
        letterSpacing: '2px'
    },
    p: {
        fontFamily: fontFamily,
        fontSize: sizes.p,
        fontWeight: 400
    },
    span: {
        fontFamily: fontFamily,
        fontSize: sizes.span,
        fontWeight: 400
    },
    a: {
        fontFamily: fontFamily,
        fontSize: sizes.a,
        fontWeight: 400,
        textDecoration:'none !important',
        letterSpacing: '2px'
    }
}

export {
    colors,
    sizes,
    fonts,
    fontFamily
}