import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='bg'>
      <div className="login-container">
        <h2>AgriRent</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="username"><h3>Username</h3></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <label htmlFor="password"><h3>Password</h3></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error && <h2 className="error-message">{error}</h2>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <br></br>
        <button className="register-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
