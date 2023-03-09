// Rewrite the SignUpForm as a function component
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import '../LoginForm/LoginForm.css'

export default function SignUpForm({ setUser, setShowLogin, showLogin }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm;

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const formDataCopy = {...formData}
            delete formDataCopy.error
            delete formDataCopy.confirm
            const user = await signUp(formDataCopy)
            setUser(user)
        } catch {
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            })
        }
    }

    return(
        <div className="authBody">
            <div className='titleCtnr'>
                <h1><strong>Not-Shein:</strong></h1>
                <h3><em>fast fashion broken down</em></h3>
            </div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <button className='loginBtn' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Not Signed Up Yet?' : 'Back to Login'}</button>
            <p className="error-message">&nbsp;{formData.error}</p>
          </div>
    )
}