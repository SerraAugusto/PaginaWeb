import React from 'react'
import styled from 'styled-components'
import ProjectBox from './ProjectBox'





const skillsList = ['CSS', 'JavaScript', 'MySql', 'Postman', 'React', 'Express', 'Sequelize','Next.js', 'StyledComponents', 'Node.js'];
const skillsCarritoPage = skillsList.slice(0,6) ;
const skillsMercadoLiebre = skillsList.filter(skill => skill === 'CSS' || skill === 'MySql' || skill === 'Sequelize');


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

const RepositorieBox = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 500px;
background-color: green;
`




export default function Portfolio() {
  return <>
   
<Container>

<RepositoriesContainers>


<RepositorieBox>
  <TittleRepositorie>Mercado Liebre</TittleRepositorie>
  <ImageStyle></ImageStyle>
<ProjectBox skills={skillsMercadoLiebre}></ProjectBox>
</RepositorieBox>
<RepositorieBox>
<TittleRepositorie>Laca Shopping</TittleRepositorie>
  <ImageStyle></ImageStyle>
<ProjectBox skills={skillsCarritoPage}></ProjectBox>
</RepositorieBox>

</RepositoriesContainers>


</Container>

    </>
}
