import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function ResidentialCleaning() {
  const services = [
    'Thorough cleaning of all living spaces',
    'Kitchen and bathroom sanitization',
    'Floor cleaning and maintenance',
    'Dusting and surface cleaning',
    'Window and glass cleaning',
    'Laundry and bedding services',
    'Carpet vacuuming',
    'Exterior appliance cleaning',
    'Customized cleaning schedules',
    'Move-in/move-out cleaning'
  ];

  const packages = [
    'Weekly cleaning service',
    'Bi-weekly cleaning service',
    'Monthly cleaning service',
    'Special occasion cleaning',
    'Post-renovation cleaning'
  ];

  const benefits = [
    'Experienced and vetted cleaners',
    'Eco-friendly cleaning options',
    'Flexible scheduling',
    'Customized cleaning plans',
    'Satisfaction guarantee',
    'Regular quality checks'
  ];

  return (
    <Layout>
      <Head>
        <title>Residential Cleaning Services | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional residential cleaning services in GTA. Keep your home spotless with our comprehensive cleaning solutions."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Residential Cleaning Services | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional residential cleaning services in GTA. Keep your home spotless with our comprehensive cleaning solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="residential cleaning, home cleaning service, house cleaning, GTA house cleaning, Toronto residential cleaning" />
      </Head>

      <PageHero
        title="Residential Cleaning Services"
        description="Professional home cleaning services tailored to your lifestyle. Experience the comfort of a clean home."
        imagePath="/images/heroes/hero-residential.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Home Cleaning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bring over 12 years of cleaning experience to your home, ensuring your space is clean and comfortable. Our residential cleaning services are designed to give you more time to enjoy your home.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/residential/residential-01.png"
                alt="Home cleaning service"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Our Services Include
              </h3>
              <CheckList items={services} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Flexible Service Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose from our range of cleaning packages or let us create a custom cleaning plan that fits your needs and schedule.
              </p>
              <div className="mt-8">
                <CheckList items={packages} />
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  The JO.DC Difference
                </h3>
                <CheckList items={benefits} />
              </div>
            </div>
            
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/images/residential/residential-02.png"
                alt="Home cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start Your Regular Cleaning Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discuss your home cleaning needs and schedule your first service.
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

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">Experienced Team</h3>
              <p className="mt-4 text-gray-600">
                With 12 years of cleaning experience, we know exactly what it takes to maintain a clean home.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">Quality Guaranteed</h3>
              <p className="mt-4 text-gray-600">
                If you're not completely satisfied with our service, we'll make it right - guaranteed.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">Green Cleaning</h3>
              <p className="mt-4 text-gray-600">
                We offer eco-friendly cleaning options to protect your family and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}