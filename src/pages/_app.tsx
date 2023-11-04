import { CacheProvider } from '@chakra-ui/next-js'
import type { AppProps } from 'next/app';
import { ChakraProvider} from '@chakra-ui/react';
import Head from 'next/head';


 
 const MyApp = ({ Component, pageProps }: AppProps) => {

 return (
    <CacheProvider>
        <ChakraProvider>
            <Head>
                <link rel="icon" href="/image/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <title>Nailal & Via</title>
            </Head>
            <Component {...pageProps}/>
        </ChakraProvider>
    </CacheProvider>
 );
 }
 
 export default MyApp;