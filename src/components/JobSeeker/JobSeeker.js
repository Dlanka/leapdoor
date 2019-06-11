import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AuthContext from '../../context/AuthContext';
import * as theme from '../../theme';
import { Card, Block, Text } from '../ui';


import ProfileImage from './ProfileImage';

import profileImg from './edited.jpg';

const Links = styled(Link)`
  font-size:28px;
  color:#000;
  text-decoration:none;
  font-weight:500;
  letter-spacing:2px;
  font-family:${theme.fontFamily};

  :hover {
    // text-decoration:none;
    color:rgba(0,0,0,1);
  }
`;

const LinkBlock = styled.div`
  width:100%;
  :not(:last-child) {
    margin-bottom:30px;
  }
`;

export default class JobSeeker extends Component {

    static contextType = AuthContext;

    logout = (e) => {
        e.preventDefault();
        this.context.onLogout();
    }

    render() {
        return (
            <Block row mt="50px" justify="center" align="center" className="container">
                <Card col="6" pl="70px" pr="70px" mb="15px" pt="50px" pb="50px" rounded={`${theme.sizes.radius}`} >

                    <Block row align="center" mb="40px">
                        <Block pr="30px">
                            <ProfileImage imgsrc={profileImg}></ProfileImage>
                        </Block>
                        <Block>
                            <Text variant="h2" mb="10px">Darshaka Lanka</Text>
                            <Text variant="h5" color={theme.colors.exlight}>Front End Engineer</Text>
                        </Block>
                    </Block>

                    <Block row justify="center">
                       
                        <LinkBlock >
                            <Links to="jobseeker/profile/12">Profile</Links>
                        </LinkBlock>

                        <LinkBlock>
                            <Links >Contact Details</Links>
                        </LinkBlock>

                        <LinkBlock>
                            <Links >Applied Jobs</Links>
                        </LinkBlock>

                        <LinkBlock>
                            <Links >Setting</Links>
                        </LinkBlock>

                        <LinkBlock>
                            <Links onClick={this.logout}>Logout</Links>
                        </LinkBlock>
                    </Block>
                    
                </Card>
            </Block>
        )
    }
}
