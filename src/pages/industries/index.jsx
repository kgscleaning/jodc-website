import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import PageHero from '../../components/sections/PageHero';
import { 
  Building2, 
  Building, 
  GraduationCap, 
  Store, 
  Factory, 
  Hotel, 
  Landmark, 
  School, 
  Dumbbell, 
  Church, 
  PartyPopper, 
  Home 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Office Buildings",
      description: "Professional cleaning services tailored for corporate environments, from small offices to large commercial buildings.",
      icon: Building2,
      category: 'Commercial'
    },
    {
      title: "Medical Facilities",
      description: "General cleaning services for medical offices, clinics, and healthcare facilities with attention to cleanliness standards.",
      icon: Building,
      category: 'Healthcare'
    },
    {
      title: "Educational Institutions",
      description: "Comprehensive cleaning solutions for schools, colleges, and educational facilities.",
      icon: GraduationCap,
      category: 'Education'
    },
    {
      title: "Retail Stores",
      description: "Maintaining clean, inviting spaces for customers and staff in retail environments.",
      icon: Store,
      category: 'Commercial'
    },
    {
      title: "Industrial & Manufacturing",
      description: "General cleaning services for industrial spaces and manufacturing facilities.",
      icon: Factory,
      category: 'Industrial'
    },
    {
      title: "Hospitality Facilities",
      description: "Keeping hotels, motels, and hospitality venues clean and welcoming for guests.",
      icon: Hotel,
      category: 'Hospitality'
    },
    {
      title: "Financial Institutions",
      description: "Professional cleaning services for banks, credit unions, and financial offices.",
      icon: Landmark,
      category: 'Commercial'
    },
    {
      title: "Government Buildings",
      description: "Reliable cleaning services for government facilities and public buildings.",
      icon: School,
      category: 'Public'
    },
    {
      title: "Fitness Centers & Gyms",
      description: "Specialized cleaning for fitness facilities and workout spaces.",
      icon: Dumbbell,
      category: 'Recreational'
    },
    {
      title: "Religious Institutions",
      description: "Respectful cleaning services for churches, temples, and other places of worship.",
      icon: Church,
      category: 'Public'
    },
    {
      title: "Event Venues",
      description: "Pre and post-event cleaning services for various venue types.",
      icon: PartyPopper,
      category: 'Entertainment'
    },
    {
      title: "Property Management",
      description: "Comprehensive cleaning solutions for property management companies.",
      icon: Home,
      category: 'Residential'
    }
  ];

  const categories = [
    'All',
    ...new Set(industries.map(industry => industry.category))
  ];

  return (
    <Layout>
      <Head>
        <title>Industries We Serve | JO.DC Cleaning Inc.</title>
        <meta 
          name="description" 
          content="Professional cleaning services for various industries across the Greater Toronto Area. From offices to event venues, we keep your space clean and professional." 
        />
      </Head>

      <PageHero
        title="Industries We Serve"
        description="With over 12 years of experience, we provide professional cleaning services to a wide range of industries in the Greater Toronto Area."
        imagePath="/images/heroes/hero-industries.png"
      />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professional Cleaning Across All Sectors
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Each industry has unique cleaning requirements. We understand these needs and deliver tailored solutions that meet the specific standards and expectations of your sector.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.title}
                    className="group relative bg-white p-8 shadow-sm hover:shadow-md rounded-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="absolute top-6 right-6 text-xs font-medium text-primary bg-primary/5 px-2 py-1 rounded">
                      {industry.category}
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600">
                      {industry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose JO.DC Cleaning?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our expertise spans across various industries, and we bring the same level of professionalism and attention to detail to every client.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Industry Experience</h3>
              <p className="mt-4 text-gray-600">
                With 12 years of experience, we understand the unique cleaning requirements of different industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Customized Solutions</h3>
              <p className="mt-4 text-gray-600">
                We tailor our cleaning services to meet the specific needs and standards of your industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Professional Team</h3>
              <p className="mt-4 text-gray-600">
                Our staff is trained in industry-specific cleaning protocols and professional conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg text-gray-100">
              Contact us today for a customized cleaning solution for your industry. <br />
              Special offer: Get 10% off your first month when referring another business!
            </p>
          </div>
          <div className="mt-10 flex flex-shrink-0 gap-x-6 lg:mt-0">
            <Link
              href="/quote"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold leading-[44px] text-white hover:text-gray-100"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;