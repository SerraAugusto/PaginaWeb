import React from 'react'
import styled from 'styled-components'
import RepositorieBox from './RepositorieBox'
import { MainContainer } from '../common/MainCointainer';
import { Title } from '../common/Title';



// 'CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize', 'Node.js', 'Next.js', 'StyledComponents'
const skillsCarritoPage = ['CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize', 'Node.js']
const skillsAdministradorDeCitas = ['React', 'CSS', 'JavaScript'];





const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

background-color: #F8F9FA;

`

const RepositoriesContainers = styled.div`

  display: flex;
  flex-wrap: wrap;
flex-direction: row;
 gap: 40px;
 justify-content: space-around;
 
 
`






export default function Portfolio() {
  return <>

    <Container id='repositories'>
   

   <MainContainer>
   <Title>Portfolio</Title>
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
