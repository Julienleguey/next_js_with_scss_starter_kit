import "../styles/globals.css";
import "../styles/styles.scss";
import Header from "../components/Header";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Footer from "../components/Footer";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <div id="full-app-container">
      <Header />
      <div id="content-container">
        <Component {...pageProps} />;
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
