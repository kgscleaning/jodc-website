import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageHero from '../components/sections/PageHero';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

const officeInfo = [
  {
    name: 'Area Served',
    description: 'Greater Toronto Area',
    icon: MapPin,
  },
  {
    name: 'Hours',
    description: 'Open Daily: 9 AM - 9 PM',
    icon: Clock,
  },
  {
    name: 'Email',
    description: 'info@jodccleaning.com',
    icon: Mail,
  },
  {
    name: 'Phone',
    description: '416-825-4793',
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Get in touch with JO.DC Cleaning Inc. for professional cleaning services in the Greater Toronto Area. Available 7 days a week."
        />
        <meta name="keywords" content="contact cleaning service, GTA cleaning contact, Toronto cleaning company contact" />
      </Head>

      <PageHero 
        title="Contact Us"
        description="Get in touch for professional cleaning services in the GTA. We'll respond within 24 hours."
        imagePath="/images/heroes/hero-contact.png"
      />

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
            <p className="mt-4 leading-7 text-gray-600">
              We're here to help with all your cleaning needs. Contact us through any of these methods, and we'll get back to you promptly.
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {officeInfo.map((item) => (
                <div key={item.name} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-6 text-primary" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {item.name === 'Phone' ? (
                      <a href="tel:416-825-4793" className="hover:text-primary">
                        {item.description}
                      </a>
                    ) : item.name === 'Email' ? (
                      <a href="mailto:info@jodccleaning.com" className="hover:text-primary">
                        {item.description}
                      </a>
                    ) : (
                      item.description
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              action="https://formspree.io/f/xkgnkpba"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}