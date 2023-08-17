import React from 'react';
import styled from 'styled-components';
import DotAndLineBar from './DotAndLineBar';
import InformationSkill from './InformationSkill';

const DatePosition = styled.h3``;

const SkillsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: -5px;
  margin-bottom: 40px;
`;

const Container = styled.div`
  display: flex;
  height: 100%;

`;

interface Props {
  skills: string[];
  name: string;
  urlName?: string;
  subNameUrl?: string;
  subName?: string;
  date: string;
}

export default function InformationItem({
  name, 
  skills,
  urlName,
   subNameUrl,
   subName,
   date,

}: Props) {
  return (
    <Container>
    <DotAndLineBar />
    <InfoContainer>
      {urlName && name && <a href={urlName} target="_blank"><h1>{name}</h1></a>}
      {subName && subNameUrl && <a href={subNameUrl} target="_blank"><h1>{subName}</h1></a>}
      {(!urlName ) && <h1>{name}</h1>}
      {(!subNameUrl ) && <h1>{subName}</h1>}
      {date && <DatePosition>{date}</DatePosition>}
      <SkillsContainer>
        {skills.map(skill => (
          <InformationSkill key={skill}>{skill}</InformationSkill>
        ))}
      </SkillsContainer>
    </InfoContainer>
  </Container>
);
}