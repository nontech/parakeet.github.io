import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Languages = () => {
  const languageGroups = [
    ['English', 'Spanish', 'French', 'German', 'Italian'],
    ['Japanese', 'Chinese', 'Korean', 'Filipino', 'Vietnamese', 'Indonesian'],
    ['Dutch', 'Swedish', 'Polish', 'Turkish', 'Arabic'],
    ['Danish', 'Norwegian', 'Russian', 'Portuguese'],
    ['Hindi', 'Tamil', 'Punjabi', 'Malay', 'Bengali', 'Gujarati'],
  ];

  return (
    <section id="languages" className="py-24 px-6 gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
            Languages
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Unlock 26 Languages</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Create Custom Audio Lessons on the Go!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {languageGroups.map((group, groupIndex) => (
            <p
              key={groupIndex}
              className="text-center text-white/80 text-base md:text-lg leading-relaxed tracking-normal md:tracking-wide mb-6 md:mb-8"
            >
              {group.map((language, langIndex) => (
                <span
                  key={language}
                  className="mx-1.5 md:mx-2 inline-block font-normal"
                >
                  {language}
                  {langIndex < group.length - 1 && (
                    <span className="mx-1.5 md:mx-2 text-white/40">
                      &middot;
                    </span>
                  )}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Parakeet makes it easy to learn any language through natural
            conversations in contexts that matter to you.
          </p>
          <Button
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-medium"
            onClick={() => {
              // scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Start Learning Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Languages;
