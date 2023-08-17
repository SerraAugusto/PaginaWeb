import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import BurguerMenu from '../common/BurguerMenu';
import { motion } from "framer-motion";







const  Container = styled.nav`
display: flex;
align-items: center;
height: 100px;
background-color: #F8F9FA;
position: fixed;
width: 100%;
z-index: 1;
`
const UlListContainer = styled.ul`
 list-style-type: none;
 display: flex;
flex: 3;
gap: 30px;
justify-content: center;

`


const NameLogo = styled.span`
flex: 1;
@media (min-width: 769px){
justify-content: flex-end;
};
@media (max-width: 768px){
justify-content: flex-start;
padding-left: 20px;
};
display: flex;
margin:30px 30px 30px 0px;
font-size: 2em;
transition: font-size 0.8s;
:hover {
  transition: font-size 0.8s;
  font-size: 2.2em;
 
}

`



export default function Header() {
    
    return <>
       
        <Container>
        <NameLogo>Augusto</NameLogo>
            <UlListContainer className='hide-Mobile'>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#">Sobre mi</a></li></motion.div> 
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#">Proyectos</a></li></motion.div> 
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#">Habilidades</a></li></motion.div> 
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><li><a href="#">Contacto</a></li></motion.div> 
            </UlListContainer>
           
           <BurguerMenu ></BurguerMenu>
           
        </Container>




    </>
}

