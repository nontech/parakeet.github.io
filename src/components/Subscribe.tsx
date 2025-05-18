'use client';

import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData();
    // Using 'emailAddress' as per your confirmation for the Google Form field name.
    // If this still doesn't work, please double-check the exact 'name' attribute
    // from the Google Form's HTML source (via Inspect Element on the form page itself).
    // It often looks like 'entry.123456789'.
    formData.append('emailAddress', email);

    try {
      await fetch(
        'https://docs.google.com/forms/u/5/d/e/1FAIpQLSdDx3ou_lS9Q7VIXvBfXF1qEmU4SUlPpdKVWaksdy3_QTmn7g/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors', // Important for submitting to Google Forms without CORS issues
        }
      );
      setMessage('Thanks for subscribing! You will hear from us soon.');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Notified of Updates
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Subscribe to our mailing list to get the latest news and updates
            from our team.
          </p>
        </div>

        {message && (
          <div
            className={`mt-6 max-w-md mx-auto p-4 rounded-md text-center ${
              message.startsWith('Thanks')
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        {!message.startsWith('Thanks') && (
          <form
            onSubmit={handleSubmit}
            className="mt-10 sm:flex max-w-md mx-auto"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              // The 'name' attribute here is for the HTML input element itself and can be different
              // from what Google Forms expects in the FormData.
              name="email-input-field"
              id="email-address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
            <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
