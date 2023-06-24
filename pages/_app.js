import '@/styles/globals.css'

//internal imports
import {TrackingProvider} from '../context/Tracking';
import { navBar, footer } from '../components/navBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <navBar />
        <Component {...pageProps} />
      </TrackingProvider>
      <footer />
    </>
  );
}
