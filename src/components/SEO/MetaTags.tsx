
import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const MetaTags = ({
  title = "Detail Pros - Detailing | Ceramic Coating | PPF | Window Tinting",
  description = "Cayman Islands' premier detailing service for cars, boats & planes. Official Ceramic Pro installer, STEK PPF and window tinting experts. Mobile car wash.",
  keywords = "car wash cayman, car detailing, mobile car wash cayman, car detailing cayman islands, boat detailing cayman, yacht detailing cayman, ceramic coating cayman islands, ceramic pro cayman, paint protection film cayman, PPF cayman islands, window tinting cayman, automotive detailing, marine detailing, aviation detailing, mobile detailing cayman, Ceramic Pro, STEK, residential window tinting, commercial window tinting",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogUrl = "https://detailpros.ky"
}: MetaTagsProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="author" content="Detail Pros Cayman" />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="Detail Pros Cayman" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@detailpros" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="KY" />
      <meta name="geo.placename" content="George Town, Grand Cayman" />
      <meta name="geo.position" content="19.2869;-81.3673" />
      <meta name="ICBM" content="19.2869, -81.3673" />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="IKa2z4DpmfjmY5fD4bTJRy8lU7IxBi0v-ymo167ziUU" />
    </Helmet>
  );
};

export default MetaTags;
