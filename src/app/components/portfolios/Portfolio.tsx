import React from 'react'
import styled from 'styled-components'
import RepositorieBox from './RepositorieBox'
import { MainContainer } from '../common/MainCointainer';




// 'CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize', 'Node.js', 'Next.js', 'StyledComponents'
const skillsCarritoPage = ['CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize', 'Node.js']
const skillsAdministradorDeCitas = ['React', 'CSS', 'JavaScript'];





const Container = styled.section`
  display: flex;
  justify-content: center;
padding-top: 50px;
background-color: #F8F9FA;
padding-bottom: 40px;
`

const RepositoriesContainers = styled.div`

  display: flex;
  flex-wrap: wrap;
flex-direction: row;
 gap: 40px;
 justify-content: space-around;
 
 
`
const Title = styled.article`
  display: flex;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 20px;
  font-size: 2.5rem;
  padding-top: 20px;
  background-color: #F8F9FA;;
`;





export default function Portfolio() {
  return <>

<Title>Portfolio</Title>
    <Container>
   <MainContainer>
      <RepositoriesContainers>

        <RepositorieBox title="Administrador de Citas"
          image={'/administradorDeCitas.jpg'} skills={skillsAdministradorDeCitas} githubUrl={'https://github.com/SerraAugusto/Administrador-de-citas'} repoUrl={'https://64cd2fbe2039343790a4a64a--sweet-manatee-310de1.netlify.app'}></RepositorieBox>

        <RepositorieBox title="Laca Cosmeticos"
          image={'/CarritoPage.png'} skills={skillsCarritoPage} githubUrl={'https://github.com/SerraAugusto/grupo_4_beautyPoint'} ></RepositorieBox>
       
          
      </RepositoriesContainers>
      </MainContainer>
    </Container>

  </>
}
