import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import InformationSkill from '../aboutMe/InformationSkill';




const Container = styled.div`
padding-top: 20px;
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-left:10px

`

interface Props{
  
  skills: string[];



}
export default function ProjectBox({skills}:Props) {
  return <>
  
  
  

 
  <Container>
        {skills.map((skill, index) => (
          <InformationSkill key={index} size="small">
            {skill}
          </InformationSkill>
        ))}

          
      
      </Container>
  
  
    </>
}

ProjectBox.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};