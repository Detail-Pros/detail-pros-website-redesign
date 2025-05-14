
import { Helmet } from "react-helmet-async";
import MetaTags from "./MetaTags";
import SchemaData from "./SchemaData";
import TrackerScripts from "./TrackerScripts";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead = (props: SEOHeadProps) => {
  return (
    <>
      <Helmet>
        <title>{props.title || "Detail Pros - Detailing | Ceramic Coating | PPF | Window Tinting"}</title>
        <link rel="icon" href="/lovable-uploads/89a8fbde-5964-45bd-baef-acd17f6d418a.png" type="image/png" />
        <link rel="apple-touch-icon" href="/lovable-uploads/89a8fbde-5964-45bd-baef-acd17f6d418a.png" />
        
        {/* Preload Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      <MetaTags {...props} />
      <SchemaData />
      <TrackerScripts />
    </>
  );
};

export default SEOHead;
