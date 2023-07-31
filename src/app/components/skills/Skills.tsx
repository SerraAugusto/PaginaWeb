import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import { FaGithub, FaCss3, FaNodeJs } from "react-icons/fa";

import { SiTypescript, SiJavascript, SiNestjs, SiStyledcomponents, SiReact, SiMysql } from 'react-icons/si';
import { IconType } from 'react-icons/lib';

const Container = styled.div`
  padding-top: 30px;
`;

const Title = styled.article`
  display: flex;
  justify-content: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-bottom: 20px;
  font-size: 2.5rem;
`;

const BoxesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
   
   gap: 10px;
 }
 @media (min-width: 769px) {
   
   gap: 30px;
 }
`;



export default function Skills() {
  return (
    <>
      <Container>


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
      </Container>
    </>
  );
}
