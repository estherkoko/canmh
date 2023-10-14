import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    console.log('sds');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;