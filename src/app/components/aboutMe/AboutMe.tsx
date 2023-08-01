import React from 'react'
import styled from 'styled-components'
import DotAndLineBar from './DotAndLineBar';

import InformationSkill from './InformationSkill';

const Container = styled.div`
margin-top: 40px;

`

const Title = styled.article`
  display: flex;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 20px;
  font-size: 2.5rem;
  
`;

const AboutMeContainer = styled.div`
display: flex;
@media (min-width: 769px) {
   
justify-content: space-around;
  }
@media (max-width: 768px) {
 
  flex-direction: column;
 }
 
`
const EducationContainer = styled.div`
padding-top: 40px;
padding-left: 5%;
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
`

const ExperienceContainer = styled.div`
padding-top: 40px;
display: flex;
flex-direction: column;

flex: 1;
padding-left: 5%;
`

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-top: -5px;
margin-bottom: 40px;

`


const SkillsContainer = styled.div`
padding-top: 20px;

display: flex;
gap: 15px;
flex-wrap: wrap;
width: 50%;

`

const TitleContainer = styled.h1`
align-self: center;
padding-bottom: 20px;
`


const DatePosition = styled.h3`


`
const ItemInformation = styled.div`
display: flex;


`

export default function AboutMe() {
  return <>
    <Container>


      <AboutMeContainer>
        <EducationContainer>
          <TitleContainer>Educacion</TitleContainer>

          <ItemInformation>
            <DotAndLineBar></DotAndLineBar>
            <InfoContainer>

              <a href="https://www.digitalhouse.com/ar" target='_blank'> <h1>Digital House</h1></a>
              <a href="https://www.digitalhouse.com/ar/productos/programacion/programacion-web-full-stack" target='_blank'><h2>Programación Web Full Stack</h2></a>
              <DatePosition>11/2021 - 07/2022</DatePosition>
              <SkillsContainer >
                <InformationSkill>HTML</InformationSkill>
                <InformationSkill>CSS</InformationSkill>
                <InformationSkill>JavaScript</InformationSkill>
                <InformationSkill>MySql</InformationSkill>
                <InformationSkill>Postman</InformationSkill>
                <InformationSkill>APIs</InformationSkill>
                <InformationSkill>React</InformationSkill>
              </SkillsContainer>
            </InfoContainer>
          </ItemInformation>
          <ItemInformation>
            <DotAndLineBar></DotAndLineBar>
            <InfoContainer>
              <a href="https://www.udemy.com/es/" target='_blank'> <h1>Udemy</h1></a>
              <h2>React - La Guía Completa: Hooks Context Redux MERN +15 Apps, Desarrollo de aplicaciones web</h2>
              <DatePosition>3/2019 - 2/2020</DatePosition>
              <SkillsContainer >
                <InformationSkill>HTML</InformationSkill>
                <InformationSkill>CSS</InformationSkill>
                <InformationSkill>JavaScript</InformationSkill>
                <InformationSkill>MySql</InformationSkill>
                <InformationSkill>Postman</InformationSkill>
                <InformationSkill>APIs</InformationSkill>
                <InformationSkill>React</InformationSkill>
                <InformationSkill>bootstrap</InformationSkill>
              </SkillsContainer>
            </InfoContainer>
          </ItemInformation>
        </EducationContainer>
        <ExperienceContainer>
          <TitleContainer>Experiencia</TitleContainer>
          <ItemInformation>
            <DotAndLineBar></DotAndLineBar>
            <InfoContainer>
             <h1>FreeLancer</h1>
             <h2>Programación Web Full Stack</h2>
              <DatePosition>11/2021 - Now</DatePosition>
              <SkillsContainer >
                <InformationSkill>HTML</InformationSkill>
                <InformationSkill>CSS</InformationSkill>
                <InformationSkill>JavaScript</InformationSkill>
                <InformationSkill>MySql</InformationSkill>
                <InformationSkill>Postman</InformationSkill>
                <InformationSkill>APIs</InformationSkill>
                <InformationSkill>React</InformationSkill>
                <InformationSkill>TypeScript</InformationSkill>
                <InformationSkill>Next.js</InformationSkill>
                <InformationSkill>Styled Components</InformationSkill>

              </SkillsContainer>
            </InfoContainer>
          </ItemInformation>
        </ExperienceContainer>
      </AboutMeContainer>



    </Container>
  </>
}

