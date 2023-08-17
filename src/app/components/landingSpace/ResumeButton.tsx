import React from 'react';
import styled from 'styled-components';
import {HiDocument} from 'react-icons/hi';

const ButtonStyle = styled.button`
display: flex;
align-items: center;
background-color: #F5F5F5;
border-style: none;
padding: 5px;
border-radius: 4px; 
transition: 0.4s;
margin-top: 10px;
font-size: 20px;

    :hover{
box-shadow: 1px 1px 5px #686868;
transform: scale(1.07);


cursor: pointer;
} 

`

interface Props {
  filename: string;
  buttonText: string;
}

export default function ResumeButton ({ filename, buttonText}: Props)  {
  const handleDownload = () => {
  
    const link = document.createElement('a');
    link.href = `${filename}`; 
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ButtonStyle onClick={handleDownload}> {buttonText}<HiDocument >
    
    </HiDocument></ButtonStyle>
  );
};
