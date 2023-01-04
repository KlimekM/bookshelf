import '@reach/dialog/styles.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = event => {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  const handleLoginClick = () => setOpenModal('login')
  const handleRegisterClick = () => setOpenModal('register')
  const handleModalCloseClick = () => setOpenModal('none')
  const handleLoginFormSubmit = formData => {
    console.log('login', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={handleLoginClick}>Login</button>
      </div>
      <div>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={handleModalCloseClick}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={handleLoginFormSubmit} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={handleModalCloseClick}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={handleLoginFormSubmit} buttonText="Register" />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
