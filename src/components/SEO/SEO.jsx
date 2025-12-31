import Script from "next/script";

const SEO = ({schema})=>{
    return (
         <Script
        id="lodging-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
}

export default SEO;