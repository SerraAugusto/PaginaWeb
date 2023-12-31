import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const ButtonContainer = styled.button<{ visible: boolean }>`
  margin-top: 10px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: rgb(137, 223, 217);
  z-index: 10001;
  pointer-events: ${({ visible }) => (visible ? 'none' : 'auto')};
`;

const Overlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 9999;
  transition: opacity 0.8s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  height: 50vh;
  width: 200px;
  background-color: white;
  right: -200px;
  z-index: 10000;
  top: 105px;
  transition: transform 0.5s ease;
  transform: ${({ visible }) => (visible ? 'translateX(-100%)' : 'translateX(0)')};
padding-top: 10px;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 10px;
  color: #000000;
  text-decoration: underline;
`;

const BurguerMenu: React.FC = () => {
  const [isContainerVisible, setContainerVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleCloseClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    
      setContainerVisible(true);
    
      
    
  };
  const handleCloseClick = () => {
    setContainerVisible(false);
  };

  return (
    <>
      <ButtonContainer visible={isContainerVisible} className="hide-Desktop" onClick={handleButtonClick}>
        <GiHamburgerMenu />
      </ButtonContainer>
      <Overlay visible={isContainerVisible} />
      <Container visible={isContainerVisible} ref={containerRef}>      
       <Link href="#skills">Skills</Link>
        <Link href="#about-me">Sobre mi</Link>
        <Link href="#repositories">Repositorios</Link>       
        <Link href="#contact">Contacto</Link>
      </Container>
    </>
  );
};

export default BurguerMenu;

