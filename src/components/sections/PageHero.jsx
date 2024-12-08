import Image from 'next/image';
import Button from '../common/Button';

export default function PageHero({ 
  title, 
  description, 
  imagePath, 
  showQuoteButton = true,
  showContactInfo = false,
  children 
}) {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        {imagePath && (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}
        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-100">
              {description}
            </p>
          )}
          
          {children}

          {showQuoteButton && (
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/quote" variant="solid-white">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline-white">
                Our Services
              </Button>
            </div>
          )}
          
          {showContactInfo && (
            <div className="mt-10 inline-flex bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex gap-x-4">
                  <div className="flex-none">
                    <span className="sr-only">Phone number</span>
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div className="text-sm leading-6">
                    <a href="tel:416-825-4793" className="font-semibold text-gray-900 hover:text-primary">
                      416-825-4793
                    </a>
                    <p className="text-gray-600">Available 9AM - 9PM</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
