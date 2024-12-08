import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageHero from '../components/sections/PageHero';
import { CheckCircle } from 'lucide-react';

export default function Careers() {
  const benefits = [
    'Competitive wages',
    'Flexible scheduling',
    'Professional training',
    'Growth opportunities',
    'Supportive work environment',
    'Health and safety equipment provided'
  ];

  const requirements = [
    'Reliable transportation',
    'Strong attention to detail',
    'Excellent communication skills',
    'Physical ability to perform cleaning tasks',
    'Available to work flexible hours',
    'Legal right to work in Canada'
  ];

  return (
    <Layout>
      <Head>
        <title>Careers | JO.DC Cleaning Inc.</title>
        <meta
          name="description"
          content="Join our growing team at JO.DC Cleaning Inc. We offer competitive wages, flexible schedules, and opportunities for growth."
        />
      </Head>

      <PageHero
        title="Join Our Team"
        description="Build your career with a company that values hard work, dedication, and professional growth. We're always looking for talented individuals to join our team."
        imagePath="/images/heroes/hero-career.png"
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At JO.DC Cleaning Inc., we believe in creating a positive work environment where our team members can thrive and grow. With over 12 years of industry experience, we provide the training and support you need to succeed.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Benefits
              </h3>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircle className="h-6 w-5 flex-none text-primary" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Requirements
              </h3>
              <ul className="mt-8 space-y-3">
                {requirements.map((requirement) => (
                  <li key={requirement} className="flex gap-x-3">
                    <CheckCircle className="h-6 w-5 flex-none text-primary" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Apply Now
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Submit your resume to join our growing team. We'll review your application and contact you if there's a potential fit.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <form
              action="https://formspree.io/f/xkgnkpba"
              method="POST"
              encType="multipart/form-data"
              className="space-y-8"
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
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900">
                  Preferred Position
                </label>
                <div className="mt-2.5">
                  <select
                    id="position"
                    name="position"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a position</option>
                    <option value="cleaner">Professional Cleaner</option>
                    <option value="supervisor">Cleaning Supervisor</option>
                    <option value="team-lead">Team Lead</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-gray-900">
                  Resume
                </label>
                <div className="mt-2.5">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">PDF, DOC, or DOCX files only</p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Additional Information
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Tell us about your experience and why you'd like to join our team..."
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm text-gray-500">
              By submitting this application, you agree to our hiring process and consent to us storing your information for recruitment purposes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}