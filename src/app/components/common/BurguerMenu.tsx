import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const ButtonContainer = styled.button<{ visible: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: rgba(240, 228, 228, 0.7);
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
  transition: opacity 0.5s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  height: 50vh;
  width: 200px;
  background-color: red;
  right: -200px;
  z-index: 10000;
  top: 105px;
  transition: transform 0.5s ease;
  transform: ${({ visible }) => (visible ? 'translateX(-100%)' : 'translateX(0)')};
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
        <h2>Elementos hipervinculables:</h2>
        <Link href="#">Enlace 1</Link>
        <Link href="#">Enlace 2</Link>
        <Link href="#">Enlace 3</Link>
      </Container>
    </>
  );
};

export default BurguerMenu;