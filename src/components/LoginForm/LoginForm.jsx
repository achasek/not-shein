import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser, setShowLogin, showLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='authBody'>
      <div className='titleCtnr'>
        <h1><strong>Not-Shein:</strong></h1>
        <h3><em>fast fashion broken down</em></h3>
      </div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <button className='loginBtn' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not Signed Up Yet?' : 'Back to Login'}</button>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
