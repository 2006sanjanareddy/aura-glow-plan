import React, { useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { WellnessDashboard } from "@/components/wellness-dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleStartJourney = () => {
    setShowDashboard(true);
  };

  if (showDashboard) {
    return <WellnessDashboard />;
  }

  return <HeroSection onStartJourney={handleStartJourney} />;
};

export default Index;
