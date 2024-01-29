import React from 'react';
import styled from 'styled-components'
import BurguerMenu from '../common/BurguerMenu';
import ResumeButton from '../common/ResumeButton';
// import ThemeSwitcherButton from '../themePage/ThemeSwitcherButton';
import MoonIcon from '../themePage/MoonIcon';
import SunIcon from '../themePage/SunIcon';



/*<ResumeButton filename='/Augusto-Serra-CV-Esp.pdf' buttonText='C.V.' ></ResumeButton> */

const Container = styled.nav`
display: flex;
align-items: center;
align-content: center;
height: 100px;
background-color: #F8F9FA;
position: fixed;
width: 100%;
z-index: 1;
justify-content: space-around;
@media (max-width: 768px){
justify-content: space-between;

};
`

const LeftSide = styled.div`
display: flex;
align-items: center;
height:50px;
gap: 5px;
@media (min-width: 769px){
justify-content: flex-end;
};
@media (max-width: 768px){
justify-self: flex-start;
padding-left: 20px;
};



`

const ListContainer = styled.div`
 list-style-type: none;
 display: flex;
 height:50px;
gap: 30px;

@media (min-width: 769px) {
 
}
justify-content: center;
@media (max-width: 768px) {
 justify-content: end;
 flex: 1;
 padding-right: 10px;
display: none;
}

`


const NameLogo = styled.a`

align-self: baseline;
font-size: 2em;

margin: 10px;  

  transition: transform 0.5s cubic-bezier(.34,1.56,.98,1.01) ;
color: #3a3a3a; 

&:hover {
    transform: scale(1.1);
        
  }
`;

const SectionAnimation = styled.a`
margin: 10px;  
font-size: 20px;  
  transition: transform 0.3s cubic-bezier(.34,1.56,.98,1.01) ;
color: #3a3a3a; 
align-self: center;

&:hover {
    transform: scale(1.5);
        
  }
`;

const ButtonStyle = styled.a`
display: flex;
font-size: 25px;
font-family: emoji;
justify-content: center;
align-items: center;
align-self: center;
background-color: rgb(137, 223, 217);
border-style: none;
padding: 5px;
border-radius: 4px; 
transition: 0.4s;
margin-top: 10px;
width: 80px;
height: 30px;
gap: 10px;
    :hover{
box-shadow: 1px 1px 5px #686868;
transform: scale(1.07);
filter: none;


cursor: pointer;
} 

`



export default function Header() {

  return <>

    <Container>
      <LeftSide>
        <NameLogo href='#Home'>Augusto</NameLogo>
        {/* <ResumeButton filename='/Augusto-Serra-CV-Esp.pdf' buttonText='C.V.' ></ResumeButton> */}
        {/*<SunIcon></SunIcon><ThemeSwitcherButton></ThemeSwitcherButton><MoonIcon></MoonIcon> */}
        <ButtonStyle  href="https://drive.google.com/file/d/1Z4n1vsHqi1XoSwWTN5mt1DuTAHYKv0sG/view?usp=sharing" target="_blank">C.V</ButtonStyle>
      </LeftSide>
      <ListContainer className='hide-Mobile' >
      
        <SectionAnimation href="#skills"><li>Skills</li></SectionAnimation>
        <SectionAnimation href="#about-me"><li>Sobre mi</li></SectionAnimation>
        <SectionAnimation href="#repositories"><li>Repositorios</li></SectionAnimation>
        <SectionAnimation href="#contact"><li>Contacto</li></SectionAnimation>
       
      </ListContainer>
      
      <BurguerMenu ></BurguerMenu>


    </Container>




  </>
}

