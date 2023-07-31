import React from 'react'
import styled from 'styled-components'
import DotAndLineBar from './DotAndLineBar';
import InformationSkill from './InformationSkill';
const DatePosition = styled.h3`


`
const SkillsContainer = styled.div`
padding-top: 20px;

display: flex;
gap: 15px;
flex-wrap: wrap;
width: 70%;

`



const InfoContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-top: -5px;
margin-bottom: 40px;
`

const ItemInformation = styled.div`
display: flex;
height: 100%;

`


export default function InformationItem() {
  return <>

    <ItemInformation>
      <DotAndLineBar />
      <InfoContainer>

        <a href="https://www.digitalhouse.com/ar" target='_blank'> <h1>Digital House</h1></a>
        <a href="https://www.digitalhouse.com/ar/productos/programacion/programacion-web-full-stack" target='_blank'><h2>Programación Web Full Stack</h2></a>
        <DatePosition>11/2021 - 07/2022</DatePosition>
        <SkillsContainer >
          <InformationSkill>HTML</InformationSkill>
          <InformationSkill>CSS</InformationSkill>
          <InformationSkill>JavaScript</InformationSkill>
          <InformationSkill>MySql</InformationSkill>
          <InformationSkill>Postman</InformationSkill>
          <InformationSkill>APIs</InformationSkill>
          <InformationSkill>React</InformationSkill>
        </SkillsContainer>
      </InfoContainer>

    </ItemInformation>
  </>
}
