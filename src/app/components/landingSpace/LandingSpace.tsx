import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';




const Container = styled.section`
  display: flex;
  align-items: center;
flex-direction: column;
 padding-top: 100px;
 background-color: white;
padding-bottom: 40px;


`
const ProfileImage = styled(Image)`
  display: inline-block;
  overflow: hidden;      
  clip-path: circle(40%);
  object-fit: cover;

  

    `
const ShadowBorder = styled.div`
    display: flex;
  overflow: hidden;      
  clip-path: circle(40%);
  object-fit: cover;
  width: 340px;
  background-color: #77c2db;
justify-content: center;
  `


const AboutAndSocial = styled.div`
display: flex;
flex-direction: column;
flex: 1.5;
align-items: center;


`

const SocialMediaContainer = styled.article`
display: flex;
gap: 20px;
margin-top: 20px;
font-size: 30px;

`
const TitleProfile = styled.div`
h1{
  margin-bottom: 30px;
  font-size: 40px;
}
p{
  font-size: 20px;
}
display: flex;
flex-direction: column;
align-items: center;
`
const GmailIconStyle = styled.div`
font-size: 30px;
`
const GmailContainer = styled.div`
display: flex;

justify-content: center;
align-items: center;
gap: 10px;
margin-top: 20px;
`

const IconStyle = styled.a`
color:#303030 ;
margin: 10px;
  
font-size: 30px;

  transition: transform 0.3s cubic-bezier(.34,1.56,.98,1.01) ;

  &:hover {
    transform: scale(1.5);
    
  }
`;



export default function LandingSpace() {

  return <>
    <Container id='Home'>
    <ShadowBorder><ProfileImage width={300} height={300} src='/fotoprofile.jpg' alt='fotoprofile'></ProfileImage></ShadowBorder>

<AboutAndSocial>

  <TitleProfile>
 
    <h1>Augusto Serra</h1>
    <p>Frontend Developer. Buscando mejorar constantemente para brindar el mejor servicio</p>
  </TitleProfile>
  <SocialMediaContainer>

    <IconStyle href="https://github.com/SerraAugusto/" target="_blank"><FaGithub/></IconStyle>
    <IconStyle href="https://www.linkedin.com/in/augusto-serra-61604b206/" target="_blank"><FaLinkedin/></IconStyle>
 



  </SocialMediaContainer>


</AboutAndSocial>
    </Container>
  </>

}

