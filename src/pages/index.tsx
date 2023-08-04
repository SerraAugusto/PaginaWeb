import React from 'react'
import  ReactDOM  from 'react-dom/client'
import styled from 'styled-components'
import Header from '@/app/components/layouts/Header'
import SpaceBar from '@/app/components/common/SpaceBar'
import LandingSpace from '@/app/components/landingSpace/LandingSpace'
import AboutMe from '@/app/components/aboutMe/AboutMe'
import Skills from '@/app/components/skills/Skills'
import Portfolios from '@/app/components/portfolios/Portfolio'



const BackgroundImage = styled.div`
background-image: url(https://static.vecteezy.com/system/resources/previews/003/106/496/large_2x/technology-background-with-binary-code-pattern-free-vector.jpg);
background-size: cover;

`
const Title = styled.article`
  display: flex;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 20px;
  font-size: 2.5rem;
  padding-top: 20px;
`;


export default function index() {
  return ( <>
   
     <Header></Header>
  <SpaceBar></SpaceBar>
  <LandingSpace></LandingSpace>
  <Title>Skills</Title>
  <SpaceBar></SpaceBar>
  <Skills></Skills>  
  <Title>Sobre Mi</Title>
      <SpaceBar></SpaceBar>
  <AboutMe></AboutMe>
  <SpaceBar></SpaceBar>
  <Title>Portfolio</Title>
      <SpaceBar></SpaceBar>
<Portfolios></Portfolios>

  </>
    
  )
}

