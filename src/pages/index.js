import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header/Header";
import Main from "@/components/Layout/Main/Main";
import Footer from "@/components/Layout/Footer/Footer";
import AppContextProvider from "@/api/AppContext";
import { customTheme } from "@/api/theme";
import { ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Dominik Supinski Front End Developer</title>
        <meta name="description" content="Dominik Supinski's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContextProvider>
        <Header />
        <Main />
        <Footer />
      </AppContextProvider>
    </ThemeProvider>
  );
}
