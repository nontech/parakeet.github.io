import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Features = () => {
  const features = [{
    title: "Learn Through Conversation",
    description: "Master any language with personalized dialogues. Real conversations about everyday situations.",
    image: "/lovable-uploads/a3328e75-813a-4d70-bc60-3e1d3c49582f.png"
  }, {
    title: "26 Languages Available",
    description: "Create custom audio lessons on the go. Switch between languages and topics with ease.",
    image: "/lovable-uploads/7bc28616-74c6-45b0-8bc2-d79591adf61d.png"
  }, {
    title: "Your Story, Their Words",
    description: "Contextual language learning made easy. Choose your topics and learn words that matter to you.",
    image: "/lovable-uploads/a406508e-8cf0-4f2c-805a-27f50bd9cd3e.png"
  }];
  return <section id="features" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-secondary mb-4">Features</Badge>
          <h2 className="text-4xl font-bold gradient-text mb-4">How Parakeet Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create personalized language learning experiences with audio lessons tailored to your interests
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => <Card key={index} className="overflow-hidden border border-border/50 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="h-[400px] overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;