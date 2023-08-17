import React from 'react'
import styled from 'styled-components'



const SkillText = styled.span`
font-size: 1.1em;
padding: 10px;
`

const SkillContainer = styled.div <{size: Size}>`
height: ${({size}) => size === "medium" ? "40px" : "30px"};
width: fit-content;
display: flex;
background-color: violet;
align-items: center;
justify-content: center;
border-radius: 5px;

`
type Size = "medium" | "small"

interface SkillProps 
{

    children: React.ReactNode;
    size?: Size;
  
  }
  
  const InformationSkill: React.FC<SkillProps> = ({ children, size = "medium" }) => {
    return (
      <>

        <SkillContainer size= {size}>
          <SkillText>{children}</SkillText>
        </SkillContainer>

      </>
    );
  };
  
  export default InformationSkill;


