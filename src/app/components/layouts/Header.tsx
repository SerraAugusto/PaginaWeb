import React from 'react';
import styled from 'styled-components'
import BurguerMenu from '../common/BurguerMenu';
import { motion } from "framer-motion";
import ResumeButton from '../common/ResumeButton';






const  Container = styled.nav`
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
@media (min-width: 769px){
justify-content: flex-end;
};
@media (max-width: 768px){
justify-self: flex-start;
padding-left: 20px;
};

gap: 20px;

`

const UlListContainer = styled.ul`
 list-style-type: none;
 display: flex;

gap: 30px;
justify-content: center;

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






export default function Header() {
  
    return <>
       
        <Container>
            <LeftSide>
        <NameLogo href='#Home'>Augusto</NameLogo>
        <ResumeButton filename='\Augusto-Serra-CV-Esp.pdf' buttonText='C.V.' ></ResumeButton></LeftSide>
            <UlListContainer className='hide-Mobile'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#skills">Skills</a></li></motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#about-me">Sobre mi</a></li></motion.div> 
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#repositories">Repositorios</a></li></motion.div>              
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#contact">Contacto</a></li></motion.div> 
            </UlListContainer>
     
           <BurguerMenu ></BurguerMenu>
           
        </Container>




    </>
}

