import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default React.memo(function Header() {
  return (
    <header>
      <Box backgroundColor={"#FFF"} padding={5} width={"100%"} color={"#000"}>
        <Text fontSize={20} fontWeight={600} fontFamily={"monospace"}>DIO Bank</Text>
      </Box>
    </header>
  )
})