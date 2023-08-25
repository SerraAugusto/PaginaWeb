import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { MainContainer } from '../common/MainCointainer';
import { Title } from "../common/Title";

// Styles
const ContainerForm = styled.div`

margin: auto;
max-width: 1300px;
display: flex;
background-color: #edeef0;
justify-content: space-between;
border-radius: 8px; 
padding: 10px;
`


const StyledContactForm = styled.div`
  
width: 100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #9bccdd;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #9bccdd ;
      }
    }

    h3 {
      margin-top: 1rem;


    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(137, 223, 217);
      color: white;
      border: none;
      transition: 0.3s;


:hover{
box-shadow:0px 0px 6px 1px #686868;

}
    }
  }
`;




export default  function ContactMe ( ) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement> ) => {if(!form.current) return;

      e.preventDefault();

    emailjs.sendForm(
        "service_n6ia7dm",
        "template_4wa89m3",
        form.current,
        "pFyhZu6cZ-p4v4slg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <MainContainer id="contact">
      <Title>Contacto</Title>
      <ContainerForm>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Nombre</h3>
        <input type="text" name="user_name" />
        <h3>Email</h3>
        <input type="email" name="user_email" />
        <h3>Mensage</h3>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </ContainerForm>
    </MainContainer>
  );
};



