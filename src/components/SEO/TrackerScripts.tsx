
import { Helmet } from "react-helmet-async";

const TrackerScripts = () => {
  return (
    <Helmet>
      {/* Fieldd Lead Form Script */}
      <script type="text/javascript" src="https://fieldd-scripts.s3.amazonaws.com/leadForm/fieldd-lead-form.js"></script>
      
      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0MGT8SSXZ"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y0MGT8SSXZ');
        `}
      </script>
      
      {/* HubSpot Embed Code */}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/24059480.js"></script>
    </Helmet>
  );
};

export default TrackerScripts;
