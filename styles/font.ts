import { Roboto, Clicker_Script } from 'next/font/google'
 

const roboto = Roboto({ subsets: ['cyrillic'], weight: [ '400' ] })
const roboto_latin = Roboto({ subsets: ['latin'], style: ['italic'],  weight: [ '300' ] })
const clicker = Clicker_Script({subsets: ["latin"], weight: ['400']})

 
export { roboto, clicker, roboto_latin}