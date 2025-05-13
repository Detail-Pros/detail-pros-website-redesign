
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl = "https://detailpros.ky",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  schema,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Detail Pros Cayman Islands` : "Detail Pros - Detailing | Ceramic Coating | PPF | Window Tinting";
  const metaDescription = description || "Cayman Islands' premier detailing service for cars, boats & planes. Official Ceramic Pro installer, STEK PPF and window tinting experts. Mobile car wash.";
  const metaKeywords = keywords || "car wash cayman, car detailing, mobile car wash cayman, car detailing cayman islands, boat detailing cayman, yacht detailing cayman, ceramic coating cayman islands, ceramic pro cayman, paint protection film cayman, PPF cayman islands, window tinting cayman, automotive detailing, marine detailing, aviation detailing, mobile detailing cayman, Ceramic Pro, STEK, residential window tinting, commercial window tinting";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Detail Pros Cayman" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
