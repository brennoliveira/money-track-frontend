import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  color: #fff;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 1.5rem;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  p {
    margin: 10px 0;
    font-size: 1rem;

    strong {
      color: #ccc;
    }
  }
`;
