import React from 'react';
import styled from 'styled-components';
import {FiDownload} from 'react-icons/fi';

const ButtonStyle = styled.button`
display: flex;
align-items: center;
background-color: rgb(137, 223, 217);
border-style: none;
padding: 5px;
border-radius: 4px; 
transition: 0.4s;
margin-top: 10px;
font-size: 20px;
width: 80px;
height: 30px;
gap: 10px;
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
    link.href = `/${filename}`; 
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ButtonStyle onClick={handleDownload}><h4> {buttonText}</h4><FiDownload >
    
    </FiDownload></ButtonStyle>
  );
};
