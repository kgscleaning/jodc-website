import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import CheckList from '../../components/common/CheckList';
import Button from '../../components/common/Button';
import Image from 'next/image';

export default function MoveInOutCleaning() {
  const services = [
    'All rooms cleaning',
    'Kitchen cleaning',
    'Bathroom cleaning',
    'Floor cleaning',
    'Window and track cleaning',
    'Baseboard and trim cleaning',
    'Light fixtures cleaning',
    'Wall spot cleaning',
    'Carpet vacuuming',
    'Basic garage cleaning'
  ];

  const benefits = [
    'Full property cleaning checklist',
    'Move-out ready cleaning',
    'Property viewing preparation',
    'Before and after photos',
    'Flexible scheduling',
    'Service guarantee'
  ];

  const features = [
    {
      title: 'Property Managers',
      description: 'We help prepare units for new tenants with thorough cleaning.'
    },
    {
      title: 'Private Owners',
      description: 'Get your space cleaned before moving out or moving in.'
    },
    {
      title: 'Real Estate Agents',
      description: 'Make properties ready for viewing with our cleaning services.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Move In/Out Cleaning Services | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional move in/out cleaning services in GTA. Prepare your space for moving with our cleaning service."
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Move In/Out Cleaning Services | JO.DC Cleaning Inc." />
        <meta property="og:description" content="Professional move in/out cleaning services in GTA. Prepare your space for moving with our cleaning service." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="move in cleaning, move out cleaning, end of lease cleaning, GTA cleaning service, Toronto moving cleaning" />
      </Head>

      <PageHero
        title="Move In/Out Cleaning"
        description="Professional cleaning services for moving transitions. We clean your space for its next chapter."
        imagePath="/images/heroes/hero-moveinout.png"
        showContactInfo={true}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Move In/Out Cleaning
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Moving can be stressful. We help by taking care of the cleaning, so you can focus on your move.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Standard Services
              </h3>
              <CheckList items={services} />
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/moveinout/moveinout-01.png"
                alt="Move in/out cleaning service"
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
                src="/images/moveinout/moveinout-02.png"
                alt="Moving cleaning services"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Service Benefits
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our cleaning service helps prepare your property for its next phase.
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
              Ready for Your Move?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let us handle the cleaning while you focus on your move. Contact us today to schedule your move in/out cleaning.
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