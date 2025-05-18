import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Imprint = () => {
  return (
    <div className="min-h-screen flex flex-col gradient-bg text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-6 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Imprint</h1>
        <p className="mb-4 text-white/80">
          Parakeet
          <br />
          Donaustraße 44
          <br />
          Berlin, 12043
          <br />
          Germany
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">Contact Information</h2>
        <p className="mb-4 text-white/80">
          Telephone: +4915162454451
          <br />
          Email:{' '}
          <a href="mailto:parakeet.lang@gmail.com">parakeet.lang@gmail.com</a>
          <br />
          Website: <a href="https://parakeet.world">parakeet.world</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
