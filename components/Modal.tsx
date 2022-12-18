import styled from "@emotion/styled";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, setOpen, title, children }) => {
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "unset";
    };
  }, [open]);
  const modalContent = (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2> <button onClick={() => setOpen(false)}>X</button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
  if (typeof window === "object") {
    return open && createPortal(modalContent, document.body);
  }
  return null;
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(17, 24, 39, 0.7);
  overflow: hidden;
  display: flex;
`;
const ModalContent = styled.div`
  background-color: white;
  max-width: 600px;
  width: 100%;
  border-radius: 0.5rem;
  color: black;
  padding: 1rem;
  margin: auto;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
  }
  button {
    font-size: 1.125rem;
    color: black;
    background-color: #cbd5e1;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`;
const ModalBody = styled.div`
  margin: 1rem 0;
`;
