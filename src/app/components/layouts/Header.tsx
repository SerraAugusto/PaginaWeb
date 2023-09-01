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
gap: 5px;
@media (min-width: 769px){
justify-content: flex-end;
};
@media (max-width: 768px){
justify-self: flex-start;
padding-left: 20px;
};



`

const UlListContainer = styled.ul`
 list-style-type: none;
 display: flex;

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

&:hover {
    transform: scale(1.5);
        
  }
`;




export default function Header() {

  return <>

    <Container>
      <LeftSide>
        <NameLogo href='#Home'>Augusto</NameLogo>{/*<SunIcon></SunIcon>
     <ThemeSwitcherButton></ThemeSwitcherButton><MoonIcon></MoonIcon> */}
      </LeftSide>
      <UlListContainer className='hide-Mobile' >
      
        <SectionAnimation href="#skills"><li>Skills</li></SectionAnimation>
        <SectionAnimation href="#about-me"><li>Sobre mi</li></SectionAnimation>
        <SectionAnimation href="#repositories"><li>Repositorios</li></SectionAnimation>
        <SectionAnimation href="#contact"><li>Contacto</li></SectionAnimation>
       
      </UlListContainer>
      
      <BurguerMenu ></BurguerMenu>

    </Container>




  </>
}

