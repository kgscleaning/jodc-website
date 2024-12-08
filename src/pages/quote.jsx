import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageHero from '../components/sections/PageHero';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'commercial',
    name: 'Commercial Cleaning',
    description: 'Office buildings, retail spaces, and other commercial properties',
  },
  {
    id: 'medical',
    name: 'Medical Facility Cleaning',
    description: 'Healthcare facilities with specialized cleaning requirements',
  },
  {
    id: 'residential',
    name: 'Residential Cleaning',
    description: 'Homes, apartments, and other living spaces',
  },
  {
    id: 'airbnb',
    name: 'Airbnb Cleaning',
    description: 'Vacation rentals and short-term rental properties',
  },
  {
    id: 'move',
    name: 'Move In/Out Cleaning',
    description: 'Thorough cleaning for property transitions',
  },
];

const frequencies = [
  { id: 'one-time', name: 'One-time Service' },
  { id: 'weekly', name: 'Weekly Service' },
  { id: 'bi-weekly', name: 'Bi-weekly Service' },
  { id: 'monthly', name: 'Monthly Service' },
];

export default function Quote() {
  return (
    <Layout>
      <Head>
        <title>Get a Free Quote | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Request a free quote for our professional cleaning services in the Greater Toronto Area. Fast response guaranteed."
        />
        <meta name="keywords" content="cleaning quote, GTA cleaning estimate, Toronto cleaning quote" />
      </Head>

      <PageHero 
        title="Get Your Free Quote"
        description="Professional cleaning services tailored to your needs. Fill out the form below and we'll get back to you within 24 hours."
        imagePath="/images/heroes/hero-quote.png"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10">
            <form
              action="https://formspree.io/f/xkgnkpba"
              method="POST"
              className="space-y-8"
            >
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Selection */ }
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Service Details</h2>
                <div className="mt-6">
                  <label className="text-base font-semibold text-gray-900">Select Service Type</label>
                  <p className="text-sm text-gray-500">Choose the type of cleaning service you need</p>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Service Type</legend>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <div key={service.id} className="relative flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id={service.id}
                              name="service-type"
                              type="radio"
                              value={service.name}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor={service.id} className="text-sm font-medium leading-6 text-gray-900">
                              {service.name}
                            </label>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div className="mt-6">
                  <label className="text-base font-semibold text-gray-900">Service Frequency</label>
                  <p className="text-sm text-gray-500">How often would you like the service?</p>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Service Frequency</legend>
                    <div className="space-y-4">
                      {frequencies.map((frequency) => (
                        <div key={frequency.id} className="relative flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id={frequency.id}
                              name="service-frequency"
                              type="radio"
                              value={frequency.name}
                              className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor={frequency.id} className="text-sm font-medium leading-6 text-gray-900">
                              {frequency.name}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div className="mt-6">
                  <label htmlFor="property-size" className="block text-sm font-semibold leading-6 text-gray-900">
                    Property Size (sq ft)
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="property-size"
                      id="property-size"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="e.g., 1500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Additional Details
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Share any specific requirements or questions you have..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Get Your Free Quote
                </button>
                <p className="mt-4 text-center text-sm text-gray-500">
                  We'll respond within 24 hours with a detailed quote
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}