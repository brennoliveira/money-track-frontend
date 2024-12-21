import styled from "styled-components";

export const Card = styled.div`
  background-color: #000;
  color: #f5f5f5;
  padding: 20px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0;
    color: #4caf50;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;
