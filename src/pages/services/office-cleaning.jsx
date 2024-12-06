import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function OfficeCleaning() {
  const services = [
    'Workstation and desk cleaning',
    'Meeting room tidying',
    'Reception area upkeep',
    'Kitchen and break room cleaning',
    'Restroom cleaning and restocking',
    'Floor maintenance',
    'Window and glass cleaning',
    'Ongoing dusting',
    'Carpet vacuuming',
    'Trash removal and recycling'
  ];

  const benefits = [
    'Clean workplace environment',
    'Professional appearance',
    'Comfortable workspace',
    'Flexible scheduling',
    'Standard cleaning products',
    'Experienced cleaning staff'
  ];

  const features = [
    {
      title: 'Reliable Scheduling',
      description: 'Consistent cleaning schedule to maintain your office.'
    },
    {
      title: 'Professional Staff',
      description: 'Our team understands office cleaning needs.'
    },
    {
      title: 'After Hours Service',
      description: 'We work around your business hours.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Office Cleaning Services | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional office cleaning services in GTA. Maintain a clean workplace with our consistent cleaning service."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Office Cleaning Services | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional office cleaning services in GTA. Maintain a clean workplace with our consistent cleaning service." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="office cleaning, workplace cleaning, commercial cleaning, GTA office cleaning, Toronto office maintenance" />
      </Head>

      <PageHero
        title="Office Cleaning Services"
        description="Professional cleaning solutions for modern workplaces. We help maintain a clean environment for your team."
        imagePath="/images/heroes/hero-office.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Office Cleaning Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide consistent cleaning services to maintain a professional and comfortable workplace environment for your team.
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
                alt="Office cleaning service"
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
            <div className="relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/images/commercial/commercial-02.png"
                alt="Office cleaning"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                The Benefits
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A clean office creates a better environment for everyone. Our cleaning services help maintain a pleasant space for your team and clients.
              </p>
              <div className="mt-8">
                <CheckList items={benefits} />
              </div>
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
              Contact us today to discuss your office cleaning needs. We offer competitive rates and flexible scheduling.
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