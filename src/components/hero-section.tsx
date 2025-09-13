import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, TrendingUp, Target, Calendar } from "lucide-react";
import heroImage from "@/assets/wellness-hero.jpg";

const features = [
  {
    icon: Heart,
    title: "Daily Mood Tracking",
    description: "Check in with yourself daily and track your emotional patterns"
  },
  {
    icon: TrendingUp,
    title: "Insightful Analytics",
    description: "Visualize your mental health trends and progress over time"
  },
  {
    icon: Target,
    title: "Personalized Tips",
    description: "Get wellness recommendations tailored to your current state"
  },
  {
    icon: Calendar,
    title: "Habit Building",
    description: "Build consistent self-care routines with streak tracking"
  }
];

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-90"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Mental Health
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Matters
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Track your mood, understand your patterns, and take meaningful steps toward better mental wellness.
          </p>
          <Button 
            onClick={onStartJourney}
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Start Your Wellness Journey
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for mental wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines mood tracking, personalized insights, and evidence-based recommendations 
              to support your mental health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to prioritize your mental health?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Join thousands of people who are taking control of their mental wellness with daily check-ins and personalized insights.
          </p>
          <Button 
            onClick={onStartJourney}
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-medium transition-all duration-300 hover:shadow-lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};