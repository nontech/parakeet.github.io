import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FaApple, FaAndroid } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="gradient-bg min-h-[90vh] w-full flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="w-full md:w-1/2 text-white space-y-6">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
            Available for iOS & Android
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Speak Like a Local
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80">
            Your Topics, Your Dialogues, Your Language.
          </h2>
          <p className="text-lg text-white/70 max-w-xl">
            Create personalized audio lessons in 26 languages. Learn languages
            through real conversations about topics that matter to you.
          </p>

          <div className="flex flex-col md:flex-row pt-4 gap-6">
            <Button
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-medium flex items-center justify-center gap-2"
              onClick={() => {
                window.open(
                  'https://apps.apple.com/de/app/parakeet-app/id6618158139?l=en-GB',
                  '_blank'
                );
              }}
            >
              <FaApple className="h-6 w-6" /> Download for iOS
            </Button>
            <Button
              className="bg-white/10 border border-white/30 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full font-medium flex items-center justify-center gap-2"
              onClick={() => {
                window.open(
                  'https://play.google.com/store/apps/details?id=com.parakeetapp.app',
                  '_blank'
                );
              }}
            >
              <FaAndroid className="h-6 w-6" /> Download for Android
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative animate-float">
          <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] app-shadow rounded-[3rem] overflow-hidden border-8 border-black bg-black">
            <img
              src="/lovable-uploads/fb056229-0a34-47c7-93ea-a9387603cb4c.png"
              alt="Parakeet App Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};
export default Hero;
