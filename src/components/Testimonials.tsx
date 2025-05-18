
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L.",
      text: "I've tried many language apps, but Parakeet's personalized lessons have made the biggest difference. Learning through conversations about topics I care about makes everything stick!",
      language: "Learning Spanish",
      rating: 5
    },
    {
      name: "Michael T.",
      text: "The ability to create custom lessons is game-changing. I'm preparing for a business trip to Japan and created specific dialogues for situations I'll encounter.",
      language: "Learning Japanese",
      rating: 5
    },
    {
      name: "Anna K.",
      text: "As a language teacher, I recommend Parakeet to all my students. The contextual learning approach helps them apply language skills to real-life situations.",
      language: "Teaching German",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-accent/40">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-secondary mb-4">Testimonials</Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of language learners who are mastering new languages through conversation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.language}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
