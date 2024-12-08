import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function MedicalFacilityCleaning() {
  const services = [
    'Patient room maintenance',
    'Exam room cleaning',
    'Waiting area upkeep',
    'Ongoing waste removal',
    'Floor maintenance',
    'Surface cleaning',
    'Restroom maintenance',
    'Common area cleaning',
    'Reception area cleaning',
    'Flexible scheduling options'
  ];

  const standards = [
    'Professional cleaning staff',
    'Consistent service schedule',
    'Standard cleaning products',
    'Efficient cleaning process',
    'Staff training',
    'Service documentation'
  ];

  const features = [
    {
      title: 'Scheduled Service',
      description: 'Reliable cleaning schedule that works with your facility hours.'
    },
    {
      title: 'Professional Staff',
      description: 'Trained cleaning staff familiar with medical facility needs.'
    },
    {
      title: 'Flexible Hours',
      description: 'Available during off-hours to minimize disruption.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Medical Facility Cleaning Services | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional cleaning services for medical facilities in GTA. Consistent cleaning to maintain a clean environment."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Medical Facility Cleaning Services | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional cleaning services for medical facilities in GTA. Consistent cleaning to maintain a clean environment." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="medical cleaning, healthcare facility cleaning, clinic cleaning service, GTA medical cleaning, Toronto healthcare cleaning" />
      </Head>

      <PageHero
        title="Medical Facility Cleaning"
        description="Professional cleaning services for healthcare environments. We maintain clean, comfortable spaces for your staff and patients."
        imagePath="/images/heroes/hero-medical.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Medical Facility Cleaning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide reliable cleaning services for medical facilities. Our cleaning staff follows standard procedures to maintain clean, pleasant environments.
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
                src="/images/medical/medical-01.png"
                alt="Medical facility cleaning"
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
                src="/images/medical/medical-02.png"
                alt="Medical facility maintenance"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Standards
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We maintain consistent cleaning standards throughout your facility.
              </p>
              <CheckList items={standards} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-16">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Schedule Your Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us to discuss your facility's cleaning needs. We'll create a schedule that fits your hours of operation.
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