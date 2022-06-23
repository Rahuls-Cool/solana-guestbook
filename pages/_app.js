import "../styles/globals.css";

import { CssBaseline,GeistProvider } from '@geist-ui/core'
// import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (

    <GeistProvider>
      <CssBaseline/>
        {/* <ThemeProvider defaultTheme="system" attribute="class"> */}
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
    </GeistProvider>
    

  );
}

export default MyApp;
