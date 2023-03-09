import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className="AuthPage">
        <div>
            {/* <h3>{showLogin ? 'Log In' : 'Sign Up'}</h3> */}
        </div>
            {showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/> : <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>}
            {/* <button className='loginBtn' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not Signed Up Yet?' : 'Back to Login'}</button> */}
      </main>
    )
}