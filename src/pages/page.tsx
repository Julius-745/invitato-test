import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme, Text } from '@chakra-ui/react';
import "@fontsource/clicker-script.css"


 
 const MyApp = ({ Component, pageProps }: AppProps) => {

 return (
    <ChakraProvider>
        <Component {...pageProps}/>
    </ChakraProvider>
 );
 }
 
 export default MyApp;