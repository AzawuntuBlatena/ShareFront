
import '@/styles/globals.css';

import "@fontsource/poppins";
import "@fontsource/montez";
import "@fontsource/righteous";
import { AuthContextProvider } from '@/context/AuthContext';



export default function App({ Component,
  pageProps: { session, ...pageProps },
}) {
  return (

  <AuthContextProvider>
    <Component {...pageProps}  />
  </AuthContextProvider>
  
   

    
  );
}
