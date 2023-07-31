import React from 'react'
import styled from 'styled-components'

import InformationItem from './InformationItem';


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

display: flex;

flex-direction: column;
justify-content: center;

`

const ExperienceContainer = styled.div`
padding-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;

`






const TitleContainer = styled.h1`
align-self: center;
padding-bottom: 20px;
`





export default function AboutMe() {
  return <>
    <Container>

      
      <AboutMeContainer>
        <EducationContainer>
          <TitleContainer>Educacion</TitleContainer>
          <InformationItem />
          <InformationItem />
        </EducationContainer>
        <ExperienceContainer>
        <TitleContainer>Experiencia</TitleContainer>
          <InformationItem />
          <InformationItem />
        </ExperienceContainer>
      </AboutMeContainer>
    
    
    
    </Container>
  </>
}

