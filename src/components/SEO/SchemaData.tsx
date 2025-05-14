
import { Helmet } from "react-helmet-async";

const SchemaData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Detail Pros Cayman",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "url": "https://detailpros.ky",
    "telephone": "+13459299840",
    "email": "contact@detailpros.ky",
    "description": "Premier auto, marine and aviation detailing, ceramic coating, paint protection film and window tinting services in the Cayman Islands.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "E33 Kingbird Warehouses, 64 Kingbird Drive",
      "addressLocality": "George Town",
      "addressRegion": "Grand Cayman",
      "postalCode": "KY1-1001",
      "addressCountry": "KY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.329869381913888",
      "longitude": "-81.37641432412949"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/detailprosky",
      "https://www.instagram.com/detailprosofficial/",
      "https://www.tiktok.com/@detailprosky",
      "https://www.linkedin.com/company/detailpros/"
    ],
    "priceRange": "$$-$$$",
    "servesCuisine": "Not applicable",
    "areaServed": "Cayman Islands"
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Automotive Detailing",
        "description": "Professional interior and exterior car detailing services in the Cayman Islands",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Detail Pros Cayman"
        },
        "serviceType": "Car Detailing",
        "areaServed": "Cayman Islands"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Ceramic Pro Coating",
        "description": "Official Ceramic Pro installer providing 9H hardness ceramic coating protection",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Detail Pros Cayman"
        },
        "serviceType": "Ceramic Coating",
        "areaServed": "Cayman Islands"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Paint Protection Film",
        "description": "STEK certified PPF installation for ultimate vehicle protection",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Detail Pros Cayman"
        },
        "serviceType": "Paint Protection Film",
        "areaServed": "Cayman Islands"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Window Tinting",
        "description": "Premium window tinting for automotive, residential and commercial applications",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Detail Pros Cayman"
        },
        "serviceType": "Window Tinting",
        "areaServed": "Cayman Islands"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Marine Detailing",
        "description": "Professional boat and yacht detailing services with specialized marine products",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Detail Pros Cayman"
        },
        "serviceType": "Marine Detailing",
        "areaServed": "Cayman Islands"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://detailpros.ky"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://detailpros.ky/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ceramic Coating",
        "item": "https://detailpros.ky/ceramic-coating"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaData;
