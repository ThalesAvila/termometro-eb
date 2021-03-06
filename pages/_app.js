import "../styles/globals.css";
import "rc-collapse/assets/index.css";
import { AppWrapper } from "../components/AppContext";
import { ApolloProvider } from "@apollo/client";
import withData from "utils/withData";
import NProgress from "nprogress";
import Router from "next/router";
import { useEffect } from "react";
import { GTMPageView } from "../utils/gtm";
import TagManager from "react-gtm-module";

import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
const tagManagerArgs = {
  gtmId: "GTM-TQ9VKRP",
};

function MyApp({ Component, pageProps, apollo }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <ApolloProvider client={apollo}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default withData(MyApp);
