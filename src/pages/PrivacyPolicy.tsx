import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-6 flex-grow">
        <h1 className="text-2xl font-bold mt-6 mb-3">
          Data Sharing and Disclosure
        </h1>
        <p className="mb-4 text-white/80">
          We may share your information with third-party service providers to
          facilitate our services, provide the App on our behalf, perform
          App-related services (e.g., cloud storage, analytics), or assist us in
          analyzing how our App is used. These third-party service providers are
          obligated to protect your information and comply with relevant privacy
          regulations.
        </p>
        <p className="mb-4 text-white/80">
          We will not disclose your personal information to any other
          third-party without your prior consent, except in the following
          limited circumstances:
        </p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>
            <b>Legal Requirements:</b> We may disclose your information if
            required by law, subpoena, or other legal process.
          </li>
          <li>
            <b>Mergers and Acquisitions:</b> If Parakeet undergoes a business
            transaction, such as a merger, acquisition, or asset sale, your
            information may be transferred as part of that transaction.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-3">Your Rights</h2>
        <p className="mb-4 text-white/80">
          You have certain rights regarding your personal information. These may
          include:
        </p>
        <ul className="list-disc list-inside mb-4 text-white/80">
          <li>
            <b>Access:</b> You have the right to request access to your personal
            information that we hold.
          </li>
          <li>
            <b>Correction:</b> You have the right to request the correction of
            any inaccurate or incomplete personal information.
          </li>
          <li>
            <b>Deletion:</b> You have the right to request the deletion of your
            personal information, subject to certain limitations.
          </li>
          <li>
            <b>Withdrawal of Consent:</b> If you have consented to the
            processing of your information, you have the right to withdraw your
            consent at any time.
          </li>
        </ul>
        <p className="mb-4 text-white/80">
          To exercise any of these rights, please contact us at
          parakeet.lang@gmail.com.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Security</h2>
        <p className="mb-4 text-white/80">
          We are committed to protecting the security of your personal
          information. We use a variety of security measures to protect your
          information, including secure servers, encryption, and access
          controls. However, no method of transmission over the internet, or
          method of electronic storage, is 100% secure. While we strive to use
          commercially acceptable means to protect your personal information, we
          cannot guarantee its absolute security.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Children's Privacy</h2>
        <p className="mb-4 text-white/80">
          Our App is not directed to children under the age of 13. We do not
          knowingly collect personal information from children. If you are a
          parent or guardian and you believe your child has provided us with
          personal information, please contact us. If we become aware that we
          have collected personal information from a child under the age of 13,
          we will take steps to delete that information.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-white/80">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
        <p className="mb-4 text-white/80">
          If you have any questions about this Privacy Policy, please contact us
          at{' '}
          <a href="mailto:parakeet.lang@gmail.com">parakeet.lang@gmail.com</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
