import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { FaInstagram,FaLinkedin, FaGithub, } from 'react-icons/fa';



const Container = styled.section`
  display: flex;
  align-items: center;
flex-direction: column;
 padding: 20px;



`
    const ProfileImage = styled.img`
  display: inline-block;
  overflow: hidden;      
  clip-path: circle(40%);
  object-fit: cover;
  width: 300px;


    `
  const ShadowBorder = styled.div`
    display: flex;
  overflow: hidden;      
  clip-path: circle(40%);
  object-fit: cover;
  width: 340px;
  background-color: #00aeff;
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
}

`
 


export default function LandingSpace() {
  
    return  <>
   <Container>
   <ShadowBorder><ProfileImage src='\fotofachera.jpg'></ProfileImage></ShadowBorder>

<AboutAndSocial>

<TitleProfile>
<h1>Augusto Serra</h1>
<p>Full Stack Web Developer, Adaptando constantemente a nuevas tecnologias </p>
</TitleProfile>
<SocialMediaContainer>

<motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.8 }}><a href="https://example.com"><FaGithub /></a></motion.div>
<motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.8 }}><a href="https://example.com"><FaLinkedin /></a></motion.div>
<motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.8 }}><a href="https://example.com"><FaInstagram /></a></motion.div>

</SocialMediaContainer>
</AboutAndSocial>
    </Container>            
    </>
    
}

