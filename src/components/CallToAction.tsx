import { Button } from '@/components/ui/button';
import { FaApple, FaAndroid } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-24 px-6 gradient-bg text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Language Learning Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of users who are learning new languages through
            personalized, contextual audio lessons
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <Button
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-medium w-full md:w-auto mb-3 flex items-center gap-2"
                onClick={() => {
                  window.open(
                    'https://apps.apple.com/de/app/parakeet-app/id6618158139?l=en-GB',
                    '_blank'
                  );
                }}
              >
                <FaApple className="h-6 w-6" /> Download for iOS
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <Button
                className="bg-white/10 border border-white/30 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full font-medium w-full md:w-auto mb-3 flex items-center gap-2"
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
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
