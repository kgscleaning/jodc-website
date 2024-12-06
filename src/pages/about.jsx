import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      name: 'Professionalism',
      description: 'Every task we undertake reflects our dedication to providing high-quality, reliable services.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      name: 'Integrity',
      description: 'Trust is the foundation of our relationships, and we always deliver on our promises.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      name: 'Attention to Detail',
      description: 'We don\'t cut corners; we clean them.',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    }
  ];

  const uniqueFeatures = [
    {
      name: 'A Fresh Start Backed by Experience',
      description: 'Though JO.DC Cleaning Inc. is newly launched, I bring over a decade of industry knowledge and hands-on expertise to every project.',
    },
    {
      name: 'Client-Focused Solutions',
      description: 'We tailor our services to meet the unique needs of each client, ensuring their spaces—whether commercial or residential—are cleaned to their exact standards.',
    },
    {
      name: 'Commitment to Excellence',
      description: 'We don\'t just clean; we create inviting spaces where your team, family, and clients feel comfortable and safe.',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>About JO.DC Cleaning Inc. | Professional Cleaning Services GTA</title>
        <meta
          name="description"
          content="JO.DC Cleaning Inc. combines fresh energy with 12 years of personal cleaning expertise. Learn about our mission to provide exceptional cleaning services in the GTA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About JO.DC Cleaning Inc. | Professional Cleaning Services GTA" />
        <meta property="og:description" content="JO.DC Cleaning Inc. combines fresh energy with 12 years of personal cleaning expertise. Learn about our mission to provide exceptional cleaning services in the GTA." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="JO.DC Cleaning Inc." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About JO.DC Cleaning Inc. | Professional Cleaning Services GTA" />
        <meta name="twitter:description" content="JO.DC Cleaning Inc. combines fresh energy with 12 years of personal cleaning expertise. Learn about our mission to provide exceptional cleaning services in the GTA." />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="cleaning company GTA, about JO.DC Cleaning, professional cleaners Toronto, commercial cleaning services, residential cleaning GTA, experienced cleaning company" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jodccleaning.com/about" />
      </Head>

      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <h2 className="mt-6 text-xl font-semibold leading-8 text-primary">
              Welcome to JO.DC Cleaning Inc.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At JO.DC Cleaning Inc., we are a newly established company with a strong foundation of expertise and dedication. While the company itself is new, I bring over 12 years of personal experience in the cleaning industry, gained through working with my family's successful cleaning business. During that time, I developed a deep understanding of the importance of hard work, attention to detail, and building trust with clients—values that now form the cornerstone of JO.DC Cleaning Inc.
            </p>
          </div>

          {/* Mission */}
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to ensure that every client enjoys peace of mind through our exceptional cleaning services. With professionalism, reliability, and an unwavering commitment to quality, we aim to create healthier and safer environments for businesses and homes in the Greater Toronto Area.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">What Sets Us Apart?</h3>
            <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {uniqueFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Vision */}
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Vision</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At JO.DC Cleaning Inc., we envision a world where clean, organized spaces foster productivity, comfort, and well-being. We aspire to become the trusted cleaning partner for both businesses and homeowners across the GTA, setting the standard for excellence in cleaning services.
            </p>
          </div>

          {/* Values */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h3>
            <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="relative pl-12">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary bg-opacity-80 shadow-sm">
                      {value.icon}
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Goal */}
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Goal</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our goal is simple yet impactful: to provide cleaning services that allow businesses and homeowners to focus on what matters most while we ensure their spaces remain spotless. With a foundation of over 12 years of personal experience in the cleaning industry, we combine proven expertise with fresh energy to deliver exceptional results. From offices and retail spaces to homes and apartments, we're here to help you create an environment that inspires confidence, productivity, comfort, and well-being.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}