import React from 'react'
import styled from 'styled-components'
import RepositorieBox from './RepositorieBox'





const skillsList = ['CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize', 'Next.js', 'StyledComponents', 'Node.js'];
const skillsCarritoPage = skillsList.slice(0, 6);
const skillsMercadoLiebre = skillsList.filter(skill => skill === 'React' || skill === 'CSS' || skill === 'JavaScript');


const ImageStyle = styled.img`
background-color: red;
width: 300px;
height: 200px;
`
const TittleRepositorie = styled.h3`
align-self: center;

`


const Container = styled.section`
  display: flex;
  justify-content: center;
margin-top: 50px;
`

const RepositoriesContainers = styled.div`

  display: flex;
  flex-wrap: wrap;
flex-direction: row;
 gap: 40px;
 justify-content: space-around;
 width: 70%;
 
`






export default function Portfolio() {
  return <>

    <Container>

      <RepositoriesContainers>

        <RepositorieBox title="Administrador de Citas"
          image={'/administradorDeCitas.jpg'} skills={skillsMercadoLiebre} githubUrl={'https://github.com/SerraAugusto/Administrador-de-citas'}></RepositorieBox>

        <RepositorieBox title="Laca Cosmeticos"
          image={'/CarritoPage.png'} skills={skillsCarritoPage} githubUrl={'https://github.com/SerraAugusto/grupo_4_beautyPoint'}></RepositorieBox>
          
      </RepositoriesContainers>

    </Container>

  </>
}
