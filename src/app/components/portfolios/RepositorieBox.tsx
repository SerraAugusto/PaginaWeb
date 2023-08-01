import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import InformationSkill from '../aboutMe/InformationSkill';

import { FaInstagram, FaLinkedin, FaGithub, } from 'react-icons/fa';


const Container = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 500px;
background-color: green;
justify-content: space-between;
`


const SkillsContainer = styled.div`
padding-top: 20px;
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-left:10px

`

const Title = styled.h2`
  text-align: center;
`;

const ImageStyle = styled.img`
 
  width: 300px;
  height: 200px;
`;


const GitIcon = styled.a`

margin: 10px;
  font-size: 30px;
  align-self: center;
  transition:  0.2s ;

  &:hover {
    transform: scale(1.2);
  }
`;

interface Props {

  skills: string[];
  title?: string;
  image?: string;
  githubUrl?: string;

}
export default function RepositorieBox({ title, image, skills, githubUrl }: Props) {
  return <>



    <Container>
<div>
      {title && <Title>{title}</Title>}
      {image && <ImageStyle src={image} alt="Skill" />}
      <SkillsContainer>
        {skills.map((skill, index) => (
          <InformationSkill key={index} size="small">
            {skill}
          </InformationSkill>
        ))}

      </SkillsContainer>
      
      </div>
      {githubUrl && (

         <GitIcon href={githubUrl} target="_blank"> <FaGithub></FaGithub></GitIcon>

      )}


    </Container>


  </>
}

RepositorieBox.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};