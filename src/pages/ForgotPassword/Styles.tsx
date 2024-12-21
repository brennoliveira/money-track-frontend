import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const Logo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: -4rem;
  margin-top: -4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 350px;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-left: 0.5rem;
  align-self: flex-start;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.success};
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const PasswordLink = styled.a`
  margin-top: 1rem;
  color: white;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const LoaderWrapper = styled.div`
  margin-top: 1rem;
`;

export const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.background};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
