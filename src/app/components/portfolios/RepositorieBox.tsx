import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import InformationSkill from '../aboutMe/InformationSkill';
import { BiWorld } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaGithub,  } from 'react-icons/fa';


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


const IconStyle = styled.a`

margin: 10px;
  
font-size: 30px;
  
  transition:  0.2s ;

  &:hover {
    transform: scale(1.2);
  }
`;

const UrlsIconStyle = styled.div`
display: flex;
align-self: center;
`

interface Props {

  skills: string[];
  title?: string;
  image?: string;
  githubUrl?: string;
  repoUrl?: string;

}
export default function RepositorieBox({ title, image, skills, githubUrl, repoUrl }: Props) {
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
      <UrlsIconStyle>
      {githubUrl && (

         <IconStyle href={githubUrl} target="_blank"> <FaGithub></FaGithub></IconStyle>

      
         )}

         {repoUrl && (

<IconStyle href={repoUrl} target="_blank"> <BiWorld></BiWorld></IconStyle>


)}
</UrlsIconStyle>

    </Container>


  </>
}

RepositorieBox.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};