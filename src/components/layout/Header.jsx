import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { name: 'Residential Cleaning', href: '/services/residential-cleaning', emoji: '🏠' },
    { name: 'Commercial Cleaning', href: '/services/commercial-cleaning', emoji: '🧹' },
    { name: 'Medical Facility Cleaning', href: '/services/medical-facility-cleaning', emoji: '🏥' },
    { name: 'Office Cleaning', href: '/services/office-cleaning', emoji: '🏢' },
    { name: 'Apartment Building Cleaning', href: '/services/apartment-cleaning', emoji: '🏘️' },
    { name: 'Move In/Move Out Cleaning', href: '/services/move-in-out-cleaning', emoji: '📦' },
    { name: 'Airbnb Cleaning', href: '/services/airbnb-cleaning', emoji: '🏡' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 shadow-sm'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="sr-only">JO.DC Cleaning Inc.</span>
              <div className="h-12 w-12 relative">
                <Image 
                  src="/images/logo.png" 
                  alt="JO.DC Cleaning Inc."
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">JO.DC Cleaning</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown menu */}
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <span className="mr-2">{service.emoji}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-lg">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <button
                  className="flex w-full items-center text-base font-medium text-gray-700"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center rounded-md py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        <span className="mr-2">{service.emoji}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/quote"
                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}