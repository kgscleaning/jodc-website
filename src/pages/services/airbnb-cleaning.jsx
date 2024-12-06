import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function AirbnbCleaning() {
  const services = [
    'Property cleaning',
    'Bed making with fresh linens',
    'Bathroom cleaning and restocking',
    'Kitchen cleaning',
    'Living areas cleaning',
    'Basic linens service',
    'Amenity restocking',
    'Pre-guest check',
    'Same-day service available',
    'Flexible scheduling'
  ];

  const amenities = [
    'Fresh towels and linens',
    'Basic restroom supplies',
    'Hand soap',
    'Toilet paper',
    'Basic kitchen supplies',
    'Standard cleaning supplies'
  ];

  const benefits = [
    'Help maintain good ratings',
    'Reliable cleaning service',
    'Basic turnover cleaning',
    'Cleaning checklist',
    'Quick response time',
    'Fair pricing'
  ];

  return (
    <Layout>
      <Head>
        <title>Airbnb & Vacation Rental Cleaning | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional Airbnb and vacation rental cleaning services in GTA. Keep your rental ready for guests with our cleaning service."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Airbnb & Vacation Rental Cleaning | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional Airbnb and vacation rental cleaning services in GTA. Keep your rental ready for guests with our cleaning service." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="airbnb cleaning, vacation rental cleaning, short term rental cleaning, GTA airbnb cleaning, Toronto rental cleaning" />
      </Head>

      <PageHero
        title="Airbnb & Vacation Rental Cleaning"
        description="Professional cleaning services for short-term rentals. We help maintain your property for guest arrivals."
        imagePath="/images/heroes/hero-airbnb.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Airbnb Cleaning Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Airbnb cleaning service helps prepare your rental property between guest stays. We follow a consistent cleaning routine to maintain your space.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Our Services
              </h3>
              <CheckList items={services} />
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/airbnb/airbnb-01.png"
                alt="Airbnb cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="/images/airbnb/airbnb-02.png"
                alt="Vacation rental cleaning"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Amenity Restocking
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We make sure your rental has basic amenities ready for guests.
              </p>
              <div className="mt-8">
                <CheckList items={amenities} />
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Host Benefits
                </h3>
                <CheckList items={benefits} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Quick Service</h3>
              <p className="mt-4 text-gray-600">
                We work with your rental schedule to clean between guest stays.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Consistent Service</h3>
              <p className="mt-4 text-gray-600">
                Our cleaning checklist ensures consistent results each time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Flexible Schedule</h3>
              <p className="mt-4 text-gray-600">
                We work around your booking schedule to clean your property.
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
              Contact us today to discuss your Airbnb cleaning needs. We'll create a schedule that works with your bookings.
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