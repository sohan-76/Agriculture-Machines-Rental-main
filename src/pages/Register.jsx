import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


    console.log('Registered:', { username, password });
    alert('Registration Successful! Redirecting to Login.');
    navigate('/');
  };

  return (
    <div className='bg'>
        <div className="register-container">
        <h2>Register for AgriRent</h2>
        <form onSubmit={handleRegister} className="register-form">
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
            <label htmlFor="confirmPassword"><h3>Confirm Password</h3></label>
            <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            />
            {error && <h2 className="error-message">{error}</h2>}
            <br></br>
            <button type="submit" className="register-button">Register</button>
        </form>
        <br></br>
        <button className="redirect-login" onClick={() => navigate('/')}>Back to Login</button>
        </div>
    </div>
  );
};

export default Register;
