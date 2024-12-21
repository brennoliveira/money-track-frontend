import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './Styles';
import api from "../../services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    setIsLoading(true);
    try {
      await api.post('/api/users', { name, email, password });
      navigate('/');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage('Erro ao realizar o cadastro. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.FormWrapper>
      <S.Logo src="/src/assets/images/logo.jpg" alt="Logo do Sistema" />

      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="name">Nome:</S.Label>
        <S.Input
          id="name"
          type="text"
          placeholder="João Silva"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          type="email"
          placeholder="joaosilva@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <S.Label htmlFor="password">Senha:</S.Label>
        <S.PasswordContainer>
          <S.Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Icon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </S.Icon>
        </S.PasswordContainer>

        <S.Label htmlFor="confirmPassword">Confirmação de Senha:</S.Label>
        <S.PasswordContainer>
          <S.Input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="*******"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <S.Icon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </S.Icon>
        </S.PasswordContainer>

        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Cadastrar'}
        </S.Button>
      </S.Form>

      <S.PasswordLink href="/">Já tem uma conta? Faça login!</S.PasswordLink>
    </S.FormWrapper>
  );
};

export default Register;
