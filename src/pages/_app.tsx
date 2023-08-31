import '../styles/container.css'; // Import your global CSS file(s)
import { AppProps } from 'next/app';
import React, {useEffect} from "react";


function TodoApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}


export default TodoApp;
