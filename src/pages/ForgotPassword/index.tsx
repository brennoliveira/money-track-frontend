import axios from "axios";
import { useState } from "react";
import * as S from './Styles.tsx';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Informe seu email para recuperar sua senha.');
      return;
    }

    setIsLoading(true);
    try {
      await axios.post('/api/forgot-password', { email });
      setMessage('Um email de recuperação foi enviado.');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage('Erro ao enviar o email. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.FormWrapper>
      <S.Logo src="/src/assets/images/logo.jpg" alt="Logo do Sistema" />

      {message && <S.ErrorMessage>{message}</S.ErrorMessage>}

      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="email">Email:</S.Label>
        <S.Input
          id="email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <S.Button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Recuperar Senha'}
        </S.Button>
      </S.Form>

      <S.PasswordLink href="/">Voltar para o Login</S.PasswordLink>
    </S.FormWrapper>
  );
};

export default ForgotPassword;
