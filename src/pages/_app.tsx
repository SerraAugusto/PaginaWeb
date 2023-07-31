
import { AppProps } from 'next/app';
import GlobalStyle from '../app/components/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps)  {
return <>
<GlobalStyle></GlobalStyle>

      <Component {...pageProps} />
   
    </>

}
