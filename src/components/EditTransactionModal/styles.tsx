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

// export const InputWrapper = styled.div`
//   label {
//     color: #ccc;
//     font-size: 1rem;
//     margin-bottom: 5px;
//     display: block;
//   }

//   input {
//     width: 100%;
//     padding: 10px;
//     background-color: #444;
//     border: 1px solid #555;
//     border-radius: 4px;
//     color: #fff;
//     font-size: 1rem;
//     transition: border-color 0.3s;

//     &:focus {
//       border-color: #4caf50;
//       outline: none;
//     }
//   }
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;

//   button {
//     padding: 10px 20px;
//     border: none;
//     border-radius: 4px;
//     color: #fff;
//     background-color: #333;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.2s;

//     &:hover {
//       background-color: #555;
//     }

//     &:focus {
//       outline: none;
//     }

//     &:nth-child(1) {
//       background-color: #d9534f;
//     }

//     &:nth-child(2) {
//       background-color: #4caf50;
//     }

//     &:nth-child(1):hover {
//       background-color: #c9302c;
//     }

//     &:nth-child(2):hover {
//       background-color: #45a049;
//     }
//   }
// `;
