import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuth } from '../context/authContext'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

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
    <Container>
        <Header />
        <Form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
            <DivCampos>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email' onChange={handleChange} />
            </DivCampos>
            <DivCampos>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name='password' onChange={handleChange} />
            </DivCampos>
            <button type="submit">Iniciar sesión</button>
        </Form>
        <Footer />
    </Container>
  )
}

export default Login

const Container = styled.div`
	background-color: #ebebeb;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: -2;
  justify-content: center;
  

  h2 {
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
		font-weight: bold;
		font-size: 1.5rem;
	}

	@media (min-width: 768px) {
		width: 100%;
		height: 100%;
	}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    width: 80%;
    height: 50%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    position: relative;
    z-index: -4;
    padding-bottom: 20px;
    top: 5%;

    @media (min-width: 768px) {
        width: 20%;
        height: 45%;
    }
    
  h2 {
		text-align: center;
		margin-top: 20px;
		position: relative;
		z-index: -4;
		font-weight: bold;
		font-size: 1.5rem;
	}
    

  button {
  background-color: #f2d608;
  color: #ffffff;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 4px #000000;
  margin-top: 20px;
  &:hover {
    background-color: #666666;
  }

  @media (min-width: 768px) {
    width: 150px;
  }
}
`

const DivCampos = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    width: 100%;
    margin: 10px auto;
    align-items: center;
    position: relative;
    z-index: -4;

    @media (min-width: 768px) {
        width: 50%;
    }

    label {
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 10px;
    }
`

