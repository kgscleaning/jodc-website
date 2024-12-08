import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import ServiceCard from '../components/common/ServiceCard';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  const services = [
    {
      title: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for businesses of all sizes.',
      href: '/services/commercial-cleaning',
      imageSrc: '/images/commercial/commercial-01.png',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      title: 'Medical Facility Cleaning',
      description: 'Specialized cleaning for healthcare environments.',
      href: '/services/medical-cleaning',
      imageSrc: '/images/medical/medical-01.png',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: 'Residential Cleaning',
      description: 'Professional home cleaning services for comfort and peace of mind.',
      href: '/services/residential-cleaning',
      imageSrc: '/images/residential/residential-01.png',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      <Head>
        <title>JO.DC Cleaning Inc. | Professional Cleaning Services in GTA</title>
        <meta
          name="description"
          content="Professional commercial and residential cleaning services in the Greater Toronto Area. Founded by an expert with 12 years of personal cleaning experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="JO.DC Cleaning Inc. | Professional Cleaning Services in GTA" />
        <meta property="og:description" content="Professional commercial and residential cleaning services in the Greater Toronto Area. Founded by an expert with 12 years of personal cleaning experience." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="JO.DC Cleaning Inc." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JO.DC Cleaning Inc. | Professional Cleaning Services in GTA" />
        <meta name="twitter:description" content="Professional commercial and residential cleaning services in the Greater Toronto Area. Founded by an expert with 12 years of personal cleaning experience." />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="cleaning services, commercial cleaning, residential cleaning, GTA cleaning, Toronto cleaning service, medical facility cleaning, office cleaning, Oshawa cleaning" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jodccleaning.com" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JO.DC Cleaning Inc.",
            "image": "/images/heroes/hero-home.png",
            "@id": "https://jodccleaning.com",
            "url": "https://jodccleaning.com",
            "telephone": "416-825-4793",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "321 Marland Avenue",
              "addressLocality": "Oshawa",
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            },
            "priceRange": "$$"
          })}
        </script>
      </Head>

      <Hero />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our comprehensive range of professional cleaning services tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </Layout>
  );
}