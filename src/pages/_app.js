import "@/styles/globals.css";
import NavBar from "../Components/NavBar";
import Body from "@/pages/Body";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useRouter } from 'next/router';
import Dashboard from "./Dashboard";
import Marketplace from "./Marketplace";
import LandingPage from './landing'


const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "https://api.studio.thegraph.com/query/65711/pro-ind/v0.0.2"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isMarketplaceRoute = router.pathname === '/Marketplace';
  const isDashboardRoute = router.pathname === '/Dashboard';
  const isBodyRoute = router.pathname === '/Body';
  const islandingRoute = router.pathname === '/landing';
  return (
    <MoralisProvider initializeOnMount={false}>
      <ApolloProvider client={client}>
        <NotificationProvider>
          <div>
            <NavBar />
            {isDashboardRoute ? (
              <Dashboard />
            ) : isBodyRoute ? (
              <Body />
            ) : isMarketplaceRoute ? (
              <Marketplace />
            ) : (
              <>
              {/*  <Body /> */}
               <landing /> 
              <Component {...pageProps} /> 
              </>
              
            )}
          </div>
        </NotificationProvider>
      </ApolloProvider>
    </MoralisProvider>
  );
}
