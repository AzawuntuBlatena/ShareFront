
import '@/styles/globals.css';

import "@fontsource/poppins";
import "@fontsource/montez";
import "@fontsource/righteous";
import { AuthContextProvider } from '@/context/AuthContext';
import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '@/src/app/store';


export default function App({ Component,
  pageProps: {session, ...pageProps },
}) {
  return (
  <AuthContextProvider>
    <Component {...pageProps}  />
  </AuthContextProvider>
  )
  }
