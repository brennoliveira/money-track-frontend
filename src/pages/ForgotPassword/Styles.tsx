import styled from 'styled-components';

// Wrapper geral para centralizar e estilizar o formulário
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

// Logo do sistema
export const Logo = styled.img`
  width: 300px; /* Ajuste conforme necessário */
  height: auto;
  margin-bottom: -4rem;
  margin-top: -4rem;
`;

// Estilo para o formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os elementos */
  width: 100%; /* Adapta o formulário à largura do contêiner */
  max-width: 400px; /* Define um limite de largura */
  margin: 0 auto; /* Centraliza horizontalmente */
`;

// Estilo para os campos de entrada
export const Input = styled.input`
  width: 100%; /* Largura ajustada */
  max-width: 350px; /* Define um limite */
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
  color: #808080;
  margin-left: -0.5rem;
  align-self: flex-start;
`;

// Botão de ação
export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1.5rem; /* Botão menor */
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  align-self: center; /* Centraliza o botão */

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

// Mensagem de erro ou sucesso
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

// Links adicionais (voltar para login ou criar conta)
export const PasswordLink = styled.a`
  margin-top: 1rem;
  color: white;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpLink = styled(PasswordLink)`
  margin-top: 0.5rem;
`;

// Loader (caso queira adicionar um indicador de carregamento)
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
