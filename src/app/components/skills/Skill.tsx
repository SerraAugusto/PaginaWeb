import React, { ReactNode } from 'react'
import styled from 'styled-components'




const BoxContainer = styled.div `
      width: 150px;
    height: 200px; 
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #77c2db;
  

`;

const IconSize = styled.div`
  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (min-width: 769px) {
    font-size: 100px;
  }
`;
const NameIcon = styled.span`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
`;



interface Props{
    name: string;
    icon: ReactNode;
   


}


export default function Skill({name, icon }:Props)  {
  return <>
  <BoxContainer >
<IconSize>
{icon}
</IconSize>
<NameIcon>{name}</NameIcon>
 </BoxContainer>
</>
}
