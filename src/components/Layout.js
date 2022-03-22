import * as React from "react";
import { Helmet } from "react-helmet";
import SiteNavbar from "../components/Navbar";
import "../styles/main.scss";
import useSiteMetadata from "./SiteMetadata";
import Footer from "./Footer";

const TemplateWrapper = ({ children }) => {
  const { title, description, keywords } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="apple-touch-icon" sizes="180x180" href="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/favicons/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/brand/rocket-brand-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/brand/rocket-brand-16x16.png" />
        <link rel="mask-icon" href="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/favicons/safari-pinned-tab.svg?v=2" color="#e73c3e" />
        <link rel="shortcut icon" href="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/brand/rocket-brand-favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Rocket Academy" />
        <meta name="application-name" content="Rocket Academy" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rocketacademy.co" />
        <meta property="og:title" content="Rocket Academy" />
        <meta property="og:description" content="Selective and comprehensive online software engineering bootcamp in Singapore, Hong Kong and Australia." />
        <meta property="og:image" content="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/brand/sharing-logo.png" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://rocketacademy.co" />
        <meta name="twitter:title" content="Rocket Academy" />
        <meta name="twitter:description" content="Selective and comprehensive online software engineering bootcamp in Singapore, Hong Kong and Australia." />
        <meta name="twitter:image" content="https://ra-web-files.s3.ap-southeast-1.amazonaws.com/all/brand/sharing-logo.png" />
        <meta name="twitter:site" content="@rocketacademyco" />
        <meta name="twitter:creator" content="@rocketacademyco" />
      </Helmet>
      <SiteNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
