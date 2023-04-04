import React from 'react'
import styled from 'styled-components'

import Cake from '../../assets/cake.jpeg'
import {FcGoogle} from 'react-icons/fc'


const Login = () => {
  return (
    <div class='flex justify-start items-center flex-col h-screen'>
      <div class='relative w-full h-full'>
        <img 
        src={Cake}
        class='w-full h-full object-cover opacity-90'
        alt='cakecover'
        />

    </div>
    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0'>
      <Maincontainer>
        <h2 class=' mt-12 mb-8 text-white font-bold '>QUEEN'S CAKE HUB</h2>
        <InputContainer>
          
          <input  class =" rounded-2xl w-10/12 h-11 p-4 text-base text-[#3e1717] font-semibold mb-8"  placeholder='EMAIL' type="text" />
          <input class='rounded-2xl w-10/12 h-11 p-4 text-base text-[#3e1616] font-semibold ' placeholder='PASSWORD' type="text" />
          
        </InputContainer>
        <ButtonContainer>
          <button class=' bg-[#0a0c49] opacity-70 w-2/5 h-12 rounded-3xl mt-8 text-white'>Sign Up</button>
        </ButtonContainer>
        <LoginWith>OR LOGIN WITH</LoginWith>
        <HorizontalRule></HorizontalRule>
        <IconsContainer>
          <FcGoogle size={40} />
          
        </IconsContainer>
        <ForgotPassword>Forgot Password</ForgotPassword>
        
      </Maincontainer>
    </div>

      
  </div>
  )
}

const Maincontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.55);
  backdrop-filter: blur(20.5px);
  
  border-radius: 10px;
  padding:20px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 55vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalRule =styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 0.25em 0 1rem 0;
  background-color: linear-gradient(to right, #14163c 0%,#03217b 70%);
  backdrop-filter: blur(25px);
`;
const LoginWith = styled.h5`
 
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
  cursor: pointer;
`;
const ForgotPassword= styled.h4`
  cursor: pointer;
  color: black;
`;

export default Login
