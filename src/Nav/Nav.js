import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as theme from '../theme';

import AuthContext from '../context/AuthContext';

const NavLink = styled(Link)`
    ${theme.fonts.a};
    color:${theme.colors.primary};
    margin-left:15px;
    font-size:12px;

    :hover {
        opacity:0.5
    }
`;

const Nav = () => (
    <AuthContext.Consumer >
        {
            ({ isAuth, userType }) => {

                const witchProfile = userType === 0 ?
                    { link: '/jobseeker', text: 'My Profile' } :
                    { link: '/', text: 'Comapny Profile' };

                return (
                    <React.Fragment>
                        <NavLink to="/job">Jobs</NavLink>
                        {
                            !isAuth ?
                                <NavLink to="/auth/login">Login</NavLink> :

                                <NavLink to={witchProfile.link}>{witchProfile.text}</NavLink>
                        }

                    </React.Fragment>
                )

            }
        }
    </AuthContext.Consumer>
);

export default Nav;
