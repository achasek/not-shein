import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <main className="AuthPage">
        <div>
            <h3>{showLogin ? 'Log In' : 'Sign Up'}</h3>
        </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not Signed Up Yet?' : 'Sign Up'}</button>
      </main>
    )
}