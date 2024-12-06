import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function ApartmentCleaning() {
  const services = [
    'Common area maintenance',
    'Lobby and entrance cleaning',
    'Elevator cleaning',
    'Hallway upkeep',
    'Garbage room cleaning',
    'Stairwell cleaning',
    'Floor care',
    'Window cleaning in common areas',
    'Parking area cleanup',
    'Basic cleaning services'
  ];

  const benefits = [
    'Experienced cleaning staff',
    'Scheduled services',
    'Flexible timing options',
    'Quick response time',
    'Standard cleaning products',
    'Fair pricing'
  ];

  return (
    <Layout>
      <Head>
        <title>Apartment Building Cleaning | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional apartment building cleaning services in GTA. Reliable cleaning solutions for residential complexes and multi-unit buildings."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apartment Building Cleaning | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional apartment building cleaning services in GTA. Reliable cleaning solutions for residential complexes and multi-unit buildings." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="apartment cleaning, building maintenance, residential complex cleaning, GTA apartment cleaning, Toronto building cleaning" />
      </Head>

      <PageHero
        title="Apartment Building Cleaning"
        description="Professional cleaning services for apartment buildings and residential complexes. Maintaining clean spaces for your residents."
        imagePath="/images/heroes/hero-apartment.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building Maintenance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our cleaning service covers all aspects of apartment building maintenance, ensuring your building stays clean and welcoming for residents.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/apartment/apartment-01.png"
                alt="Apartment building cleaning"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Core Services
              </h3>
              <CheckList items={services} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Why Choose Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our service focuses on consistent cleaning that makes a difference in your building's appearance and residents' comfort.
              </p>
              <div className="mt-8">
                <CheckList items={benefits} />
              </div>
            </div>

            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/images/apartment/apartment-02.png"
                alt="Building maintenance services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Property Value</h3>
              <p className="mt-4 text-gray-600">
                Clean, well-kept buildings maintain their appeal and value over time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Resident Satisfaction</h3>
              <p className="mt-4 text-gray-600">
                Clean common areas help keep residents happy and comfortable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Reliable Service</h3>
              <p className="mt-4 text-gray-600">
                We maintain a consistent schedule that works for your building.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start Your Cleaning Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us to discuss your building's cleaning needs. We'll create a schedule that works for your property.
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