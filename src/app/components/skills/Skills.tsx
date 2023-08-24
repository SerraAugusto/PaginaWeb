import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import { FaGithub, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNestjs, SiStyledcomponents, SiReact, SiMysql } from 'react-icons/si';
import { MainContainer } from "../common/MainCointainer";
import { Title } from "../common/Title";
const Container = styled.div`

  background-color: #F8F9FA;
padding-bottom: 40px;

`;



const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
  @media (max-width: 768px) {
   
   gap: 10px;
 }
 @media (min-width: 769px) {
   max-width: 1200px;
   gap: 30px;
margin: auto;
 }
`;



export default function Skills() {
  return (
    <>

   
      <Container id="skills">
        <MainContainer>
      <Title>Skills</Title>


        <BoxesContainer>
        <Skill icon={<SiReact></SiReact>} name="React"></Skill>
        <Skill icon={<FaGithub></FaGithub>} name="GitHub"></Skill>
          <Skill icon={<SiJavascript></SiJavascript>} name="JavaScript"></Skill>
          <Skill icon={<FaCss3></FaCss3>} name="CSS"></Skill>
          <Skill icon={<SiTypescript></SiTypescript>} name="TypeScript"></Skill>
          <Skill icon={<SiNestjs></SiNestjs>} name="Next.js"></Skill>
          <Skill icon={<FaNodeJs></FaNodeJs>} name="Node.js"></Skill>
          <Skill icon={<SiStyledcomponents></SiStyledcomponents>} name="StyledComponents"></Skill>
          <Skill icon={<SiMysql></SiMysql>} name="MySql"></Skill>

          
        </BoxesContainer>
        </MainContainer>
      </Container>
      
    </>
  );
}
