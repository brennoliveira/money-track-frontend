import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './Styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Preencha todos os campos');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data)
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.log(error)
      setErrorMessage('Erro ao realizar o login. Verifique suas credenciais.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.FormWrapper>
      <S.Logo src="/src/assets/images/logo.jpg" alt="Logo do Sistema" />
      {/* <h1>Login</h1> */}
      
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="password">Email:</S.Label>
        <S.Input
          type="email"
          placeholder="joaosilva@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <S.Label htmlFor="password">Senha:</S.Label>
        <S.Input
          type="password"
          placeholder="12345678"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando' : 'Login'}
        </S.Button>
      </S.Form>
      
      <S.PasswordLink href="/forgot-password">Esqueceu a senha?</S.PasswordLink>
      <S.SignUpLink href="/signup">Não tem uma conta? Crie uma agora!</S.SignUpLink>

      {/* <S.SocialLoginWrapper>
        <S.SocialButton onClick={() => console.log("Login com Google")}>Login com Google</S.SocialButton>
        <S.SocialButton onClick={() => console.log("Login com Facebook")}>Login com Facebook</S.SocialButton>
      </S.SocialLoginWrapper> */}
      
      <S.LoaderWrapper>
        {isLoading && <S.Loader />}
      </S.LoaderWrapper>
    </S.FormWrapper>
  );
};

export default Login;
