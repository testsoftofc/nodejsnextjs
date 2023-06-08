import '../styles/globals.css'

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001/api/";

axios.defaults.baseURL = "/api/";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
