import axios from "axios";
import { useState } from "react"

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      //TODO: save JWT token and redirect to Dashboard
      return response;
    } catch (error) {
      console.log('Falha no login', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="joaosilva@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
        </input>
        <input
          type="password"
          placeholder="12345678"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
        </input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;