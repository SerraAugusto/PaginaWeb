import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
  /* Estilos para tu botón principal */
`;

const ModalContainer = styled.div<{ show: boolean }>`
  /* Estilos para el contenedor modal */
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
  /* Estilos para el contenido modal */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;

const ButtonInsideModal = styled.button`
  /* Estilos para los botones dentro del modal */
`;

const OptionButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          closeModal();
        }
      };
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    return (
      <>
        <ButtonStyle onClick={openModal}>Abrir Modal</ButtonStyle>
        <ModalContainer show={showModal}>
          <ModalContent ref={modalRef}>
            {/* Contenido dentro del modal */}
            <ButtonInsideModal>Botón 1</ButtonInsideModal>
            <ButtonInsideModal>Botón 2</ButtonInsideModal>
          </ModalContent>
        </ModalContainer>
      </>
    );
  };
  

export default OptionButton