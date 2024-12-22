import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #292940;
  color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;

  h2 {
    margin-top: 0;
    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
    }

    input,
    select {
      padding: 10px;
      margin-top: 5px;
      border: none;
      border-radius: 5px;
      background: #1e1e2f;
      color: #f5f5f5;
    }

    div {
      grid-column: span 2;
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    button {
      grid-column: span 3;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }

    button[type="submit"] {
      background-color: #52c41a;
      color: #fff;
    }

    button[type="button"] {
      background-color: #ff4d4f;
      color: #fff;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #343456;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }

  button {
    background-color: #52c41a;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #4ca317;
    }
  }
`;
