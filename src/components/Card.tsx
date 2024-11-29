import React from 'react'
import InputField from './InputField'
import Btn from './ButtonLogin'
import { Box, Center, Flex } from '@chakra-ui/react'
import { login } from '../services/login'
import Header from './Header'

export default function Card() {
  return (
    <>
      <Header />
      <Flex minHeight='100vh' backgroundColor="#9413dc" padding={25} justify={"center"} align={"center"} fontFamily={"monospace"} fontSize={16} fontWeight={600}>
        <Box backgroundColor={"#FFF"} borderRadius={"25px"} padding={15} color={"#000"}>
          <Center>
            <h1>Faça o Login</h1>
          </Center>
          <InputField type="email" htmlFor='emailInput' placeholder='E-mail' label='Email' />
          <InputField type="password" htmlFor='passwordInput' placeholder='Password' label='Password' />
          <Center>
            <Btn onClick={login} placeholder='Entrar' />
          </Center>
        </Box>
      </Flex>
    </>
  )
}
