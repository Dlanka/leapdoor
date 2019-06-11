import React from 'react'
import styled from 'styled-components';

const ImageContainer = styled.div`
    width:90px;
    height:90px;
    border-radius:50%;
    overflow:hidden;
    display:inline-block;
   
`;

const Image = styled.div`
    width:100%;
    height:100%;
    background-size: cover;
    background-image:url(${props => props.imgsrc ? props.imgsrc : ''})
`;

const ProfileImage = ({imgsrc}) => {
  return (
    <ImageContainer>
        <Image imgsrc={imgsrc}/>
    </ImageContainer>
  )
}

export default ProfileImage
