import { extendTheme } from '@chakra-ui/react'
import { Roboto, Clicker_Script } from 'next/font/google'

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Clicker Script', sans-serif`,
  },
})

export default theme