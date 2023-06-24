import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header/Header";
import Main from "@/components/Layout/Main/Main";
import Footer from "@/components/Layout/Footer/Footer";
import AppContextProvider from "@/api/AppContext";
import { customTheme } from "@/api/theme";
import { ThemeProvider } from "@mui/material";
import LoadingScreen from "@/components/Layout/LoadingScreen/LoadingScreen";
import { useState, useEffect } from "react";
import { countAssets } from "@/helpers/assetsCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [assetsCount, setAssetsCount] = useState(0);
  // const [loadedAssets, setLoadedAssets] = useState(0);

  // useEffect(() => {
  //   const assetExtensions = [".png", ".jpg", ".woff", ".woff2"];

  //   const count = countAssets(assetExtensions);
  //   setAssetsCount(count);
  // }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Head>
        <title>Dominik Supinski Front End Developer</title>
        <meta name="description" content="Dominik Supinski's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContextProvider>
        {/* <LoadingScreen /> */}
        <Header />
        <Main />
        <Footer />
      </AppContextProvider>
    </ThemeProvider>
  );
}
