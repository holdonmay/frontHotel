import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '../Button'
import Input from '../Input'
import './Login.css'
import Navbar from "../Navbar";

const MainContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px 0 rgba(108, 122, 137, 0.2);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #F4F4F6;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

const TextoBienvenida = styled.h2`

  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%
`;

const ButtonContainer = styled.div`

  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Login = () => {
  const [clave,setClave] = useState("")
  const [pssw,setPssw] = useState("")
  const navigate = useNavigate()
  
const handleSubmit = e => {
  e.preventDefault();
  fetch('http://localhost:9000/api/v1.0/login', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({clave,pssw})
    })
    .then(resp => resp.json())
      .then( json => {
        if(json.status !== 'error')
        {
          navigate('/')
        }else{
          alert('Dato incorrectos')
        }
      })
      .catch(err=>console.log(err))   
}
  return (
    <div className  = "back">
    <form onSubmit={handleSubmit}>
        <MainContainer>
           <TextoBienvenida>Welcome</TextoBienvenida> 
           <InputContainer>
            <Input type="text" placeholder="User" onChange={(e)=>setClave(e.target.value)}/>
            <Input type="password" placeholder="Password" onChange={(e)=>setPssw(e.target.value)}/>
           </InputContainer>
           <ButtonContainer>
             <Button title="Send"></Button>
           </ButtonContainer>
        </MainContainer>
    </form> 
    </div>
  )
}

export default Login

/*export default class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            clave: '',
            pass: ''
          }
      
          this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log('aqui dando click')
        fetch('http://localhost:4000/api/v1/prueba')
        .then( res => res.json() )
        .then( json => console.log(json))
        .catch(err => console.log(err));
    }
  

  render() {
    return (
        <form>
            <MainContainer>
               <TextoBienvenida>Bienvenido</TextoBienvenida> 
               <InputContainer>
                <Input type="text" placeholder="Usuario"></Input>
                <Input type="password" placeholder="Contraseña"></Input>
               </InputContainer>
               <ButtonContainer>
                 <Button title="Enviar"></Button>
               </ButtonContainer>
            </MainContainer>
        </form> 
    )
  }
}
*/