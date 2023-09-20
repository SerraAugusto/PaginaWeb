import React from 'react'
import styled from 'styled-components'
import { MainContainer } from '../common/MainCointainer';
import InformationItem from './InformationItem';
import { Title } from '../common/Title';

const Container = styled.div`

background-color:white;
padding-bottom: 30px;
`



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
padding-bottom: 50px;

`





export default function AboutMe() {
  return <>
    
    <Container id='about-me'>

<MainContainer>
<Title>Sobre Mi</Title>
      <AboutMeContainer>
        <EducationContainer>
          <TitleContainer>Educacion</TitleContainer>
          <InformationItem
            name='Digital House'
            urlName='https://www.digitalhouse.com/ar'
            subName='Programador Full Stack'
            subNameUrl='https://www.digitalhouse.com/ar/productos/programacion/programacion-web-full-stack'
            date='11/2021 - 07/2022'
            skills={['React', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'APIs', 'Postman', 'Express', 'Sequelize']}
          />
          <InformationItem
            name='Udemy'   
            urlName='https://www.udemy.com/es/'                  
            subName='React - La Guía Completa: Hooks Context Redux MERN +15 Apps'
            subNameUrl='https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/?kw=React+-+La+Guía+Completa%3A+Hooks+Context+Redux+MERN+%2B15+Apps&src=sac' 
            date='03/2019 - 02/2020'
            skills={['React', 'CSS', 'JavaScript', 'APIs']}
          />

        </EducationContainer>
        <ExperienceContainer>
          <TitleContainer>Experiencia</TitleContainer>
          <InformationItem
            name='Freelancer'           
            subName='Frontend Web Developer'            
            date='02/2021 - now'
            skills={['React', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'APIs','TypeScript', 'Next.js', 'Styled Components']}

          />
          

        </ExperienceContainer>
      </AboutMeContainer>

      </MainContainer>

    </Container>
  </>
}

