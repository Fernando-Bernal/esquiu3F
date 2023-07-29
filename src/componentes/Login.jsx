import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../context/authContext'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import styled from 'styled-components'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userAccount, setUserAccount] = useState({
        email: '',
        password: ''
    })

    const { signIn } = userAuth();

   const handleChange = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          dispatch(login(userAccount.email));
          await signIn(userAccount.email, userAccount.password);
          navigate("/admin-torneo");
        } catch (error) {
          alert('Datos incorrectos');
        }
      };


  return (
    <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Dirección Email:</label>
                <input type="email" id="email" name='email' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name='password' onChange={handleChange} />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    </div>
  )
}

export default Login