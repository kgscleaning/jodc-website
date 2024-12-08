const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the entire Greater Toronto Area (GTA), providing professional cleaning services to both commercial and residential clients."
    },
    {
      question: "Do you provide your own cleaning supplies?",
      answer: "Yes, we bring all necessary professional-grade cleaning supplies and equipment. We use high-quality, effective products that are safe for your space."
    },
    {
      question: "Are you insured?",
      answer: "Yes, we are fully insured for your peace of mind. Our comprehensive insurance coverage protects both our staff and your property."
    },
    {
      question: "What types of properties do you clean?",
      answer: "We clean a wide range of properties including commercial spaces (offices, medical facilities, retail), residential homes, apartment buildings, Airbnbs, and provide move-in/move-out cleaning services."
    },
    {
      question: "How do I get a quote?",
      answer: "You can request a quote through our website's quote form, or contact us directly by phone at 416-825-4793 or email at jo.dc@jodccleaning.com. We'll respond within 24 hours with a detailed quote."
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our cleaning services.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <dt className="mb-4">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </h3>
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 text-center">
            <p className="text-base text-gray-600">
              Have more questions? Feel free to{' '}
              <a href="/contact" className="font-semibold text-primary hover:text-primary-dark">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;