import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import PageHero from '../../components/sections/PageHero';

export default function Services() {
  const services = [
    {
      name: 'Commercial Cleaning',
      description: 'Comprehensive cleaning solutions for businesses of all sizes. Our services include daily maintenance, deep cleaning, and customized cleaning programs.',
      href: '/services/commercial-cleaning',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      features: ['Dusting & Surface Cleaning', 'Floor Care', 'Waste Management', 'Restroom Maintenance', 'Break Room Cleaning'],
      image: '/images/commercial/commercial-01.png'
    },
    {
      name: 'Office Cleaning',
      description: 'Keep your workplace clean, fresh, and productive with our professional office cleaning services.',
      href: '/services/office-cleaning',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      features: ['Reception & Common Areas', 'Workstation Cleaning', 'Meeting Room Maintenance', 'Window Cleaning', 'Carpet Care'],
      image: '/images/commercial/office-01.png'
    },
    {
      name: 'Medical Facility Cleaning',
      description: 'Specialized cleaning services for healthcare environments, ensuring a safe and sanitized space.',
      href: '/services/medical-facility-cleaning',  // Changed this line from medical-cleaning to medical-facility-cleaning
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
        </svg>
      ),
      features: ['Hospital-Grade Disinfection', 'Exam Room Cleaning', 'Waiting Area Sanitization', 'Medical Waste Management', 'HEPA Filtration'],
      image: '/images/medical/medical-01.png'
    },
    {
      name: 'Apartment Building Services',
      description: 'Comprehensive cleaning solutions for apartment buildings and residential complexes.',
      href: '/services/apartment-cleaning',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      features: ['Common Area Maintenance', 'Lobby Cleaning', 'Elevator Cleaning', 'Garbage Room Maintenance', 'Entrance Way Care'],
      image: '/images/residential/apartment-01.png'
    },
    {
      name: 'Move In/Move Out Cleaning',
      description: 'Thorough cleaning services for property transitions, ensuring spaces are ready for new occupants.',
      href: '/services/move-in-out-cleaning',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
      features: ['Deep Cleaning', 'Appliance Cleaning', 'Cabinet Sanitization', 'Floor Restoration', 'Wall Washing'],
      image: '/images/moveinout/moveinout-01.png'
    },
    {
      name: 'Airbnb Cleaning',
      description: 'Specialized cleaning services for short-term rentals, ensuring guest satisfaction and high ratings.',
      href: '/services/airbnb-cleaning',
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      ),
      features: ['Turnover Cleaning', 'Linen Service', 'Restocking Essentials', 'Pre-guest Inspection', 'Emergency Cleaning'],
      image: '/images/airbnb/airbnb-01.png'
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Our Services - JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Professional cleaning services in the Greater Toronto Area including commercial, medical, office, and residential cleaning solutions."
        />
      </Head>

      <PageHero 
        title="Our Services"
        description="Comprehensive cleaning solutions tailored to your specific needs. From commercial spaces to residential properties, we deliver excellence in every clean."
        imagePath="/images/heroes/hero-industries.png"
      />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {services.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.href}
                  className="group bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200/50 hover:shadow-md hover:ring-primary/50 transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary group-hover:bg-primary-dark transition-colors">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {service.name}
                      </h2>
                      <p className="mt-2 text-base text-gray-600">{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <svg 
                              className="h-4 w-4 mr-2 text-primary group-hover:text-primary-dark transition-colors" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth={2} 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 px-6 py-12 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900">Special Offer</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Get 10% off for a month when referring someone else. Multiple referrals mean multiple months of savings!
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
                >
                  Contact Us for a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}