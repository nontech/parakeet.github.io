import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AccountDeletion: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg text-white">
      <Navbar />
      <main className="container mx-auto py-12 px-6 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Delete Your Account
        </h1>
        <div className="bg-white/10 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <p className="mb-4 text-white/90">
            If you decide to delete your account with Parakeet, the language
            learning app, please follow the steps outlined below. We value your
            privacy and data security, so we ensure a thorough deletion process.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
            What Happens When You Delete Your Account?
          </h2>
          <p className="mb-4 text-white/90">
            Upon receiving your request to delete your account, we will:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4 text-white/90 space-y-2">
            <li>
              Permanently remove all your personal information associated with
              your account.
            </li>
            <li>
              Retain content generated using our tool for community and
              educational purposes, as specified in our user agreement.
            </li>
          </ul>
          <p className="mb-6 text-white/90">
            This means that while all your personal data such as email,
            progress, and preferences will be deleted, any contributions or
            content you have created with our tool will remain available on the
            platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
            How to Request Account Deletion
          </h2>
          <p className="mb-4 text-white/90">
            To request the deletion of your account, please click the button
            below to open your preferred email client and send us an email
            directly:
          </p>
          <div className="text-center my-6">
            <a
              href="mailto:parakeet.lang@gmail.com?subject=Request%20for%20Account%20Deletion&body=I%20wish%20to%20delete%20my%20account%20and%20all%20related%20data%20permanently.%20Please%20process%20my%20request%20and%20confirm%20once%20done.%20Thank%20you."
              className="inline-block bg-[#4f4cf2] hover:bg-[#3a3ada] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Request Account Deletion
            </a>
          </div>
          <p className="text-sm text-white/70 mb-6 text-center">
            This link is also prominently featured on our Google Play store
            listing and refers to the steps that users should take to request
            that their account is deleted.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
            Additional Information
          </h2>
          <p className="text-white/90">
            If you have any questions or require further assistance, please
            contact us at{' '}
            <a
              href="mailto:parakeet.lang@gmail.com"
              className="text-white hover:underline"
            >
              parakeet.lang@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountDeletion;
