import React from 'react'
import { Button } from '@chakra-ui/react'

interface IButton {
  onClick?: () => {} | void;
  placeholder: string
}

export default React.memo(function ButtonLogin({onClick, placeholder}: IButton) {
  return (
    <>
      <Button onClick={onClick} colorPalette="teal" size='lg' variant='solid' width={"100%"} marginTop={2}>{placeholder}</Button>
    </>
  )
})
