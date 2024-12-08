import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function CommercialCleaning() {
  const services = [
    'Regular office maintenance and cleaning',
    'Floor cleaning and maintenance',
    'Window and glass cleaning',
    'Restroom cleaning and restocking',
    'Break room and kitchen cleaning',
    'Trash removal and recycling',
    'Regular dusting',
    'Carpet vacuuming',
    'Surface cleaning',
    'Evening and weekend cleaning available'
  ];

  const benefits = [
    'Clean workplace environment',
    'Professional appearance',
    'Comfortable workspace',
    'Flexible cleaning schedules',
    'Eco-friendly cleaning options',
    'Professional cleaning staff'
  ];

  return (
    <Layout>
      <Head>
        <title>Commercial Cleaning Services | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional commercial cleaning services in GTA. Keep your business space clean with our regular cleaning solutions."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Commercial Cleaning Services | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional commercial cleaning services in GTA. Keep your business space clean with our regular cleaning solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="commercial cleaning, office cleaning, GTA commercial cleaning, Toronto cleaning service" />
      </Head>

      <PageHero
        title="Commercial Cleaning Services"
        description="Professional cleaning solutions for businesses of all sizes. We maintain your workspace while you focus on your business."
        imagePath="/images/heroes/hero-commercial.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Commercial Cleaning Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commercial cleaning service provides reliable, regular cleaning that maintains a clean and professional business environment.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Our Services Include
              </h3>
              <CheckList items={services} />
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/commercial/commercial-01.png"
                alt="Commercial cleaning service in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/images/commercial/commercial-02.png"
                alt="Clean office environment"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Benefits of Regular Cleaning
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A clean workplace creates a better environment for everyone. Our cleaning services help maintain a comfortable space for your team and clients.
              </p>
              <CheckList items={benefits} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Start Regular Cleaning?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss your commercial cleaning needs. We offer competitive rates and flexible cleaning schedules.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/quote" variant="solid">
                Get a Free Quote
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}