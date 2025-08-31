import "../styles/globals.css";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const theme = createTheme({
    colors: {
      // brand palette: accent red
      brand: Array(10).fill("#DA0037"),
      // optional: define your gray scale (not required if using "other")
      dark: [
        "#171717", // 0 darkest-gray
        "#1c1c1c", // 1 dark-gray
        "#1c1c1c",
        "#1c1c1c",
        "#444444", // 4 medium-gray
        "#444444",
        "#444444",
        "#444444",
        "#444444",
        "#444444",
      ],
    },
    primaryColor: "brand",

    // set global defaults
    fontFamily: "Inter, sans-serif",
    headings: { fontFamily: "Inter, sans-serif" },

    // global colors
    black: "#171717", // deepest background
    white: "#EDEDED", // text color
  });

  return pageLoading ? (
    <Loading />
  ) : (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
