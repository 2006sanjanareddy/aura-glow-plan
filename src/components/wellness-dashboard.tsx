import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoodSelector } from "@/components/ui/mood-selector";
import { Heart, TrendingUp, Calendar, Target } from "lucide-react";

const mockMoodData = [
  { date: "2024-01-10", mood: "happy" },
  { date: "2024-01-11", mood: "good" },
  { date: "2024-01-12", mood: "neutral" },
  { date: "2024-01-13", mood: "good" },
  { date: "2024-01-14", mood: "happy" },
];

const recommendations = [
  {
    title: "Take a 10-minute mindfulness break",
    category: "Mindfulness",
    icon: "🧘‍♀️",
    time: "10 min"
  },
  {
    title: "Go for a short walk outside",
    category: "Physical",
    icon: "🚶‍♂️",
    time: "15 min"
  },
  {
    title: "Practice gratitude journaling",
    category: "Mental",
    icon: "📝",
    time: "5 min"
  }
];

export const WellnessDashboard: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleCheckIn = () => {
    if (selectedMood) {
      setHasCheckedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Wellness Journey</h1>
          <p className="text-lg opacity-90">Track your mood, discover insights, and nurture your mental health</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Check-in */}
          <div className="lg:col-span-2">
            <MoodSelector 
              selectedMood={selectedMood}
              onMoodSelect={handleMoodSelect}
              className="mb-6"
            />
            
            {selectedMood && !hasCheckedIn && (
              <div className="text-center mb-6">
                <Button 
                  onClick={handleCheckIn}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  Complete Daily Check-in
                </Button>
              </div>
            )}

            {hasCheckedIn && (
              <Card className="mb-6 bg-gradient-secondary">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">✨</div>
                  <h3 className="text-lg font-semibold mb-2">Check-in Complete!</h3>
                  <p className="text-muted-foreground">Thank you for taking care of your mental health today.</p>
                </CardContent>
              </Card>
            )}

            {/* Mood Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Your Mood Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  {mockMoodData.map((entry, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-2xl mb-1">
                        {entry.mood === "happy" && "😊"}
                        {entry.mood === "good" && "🙂"}
                        {entry.mood === "neutral" && "😐"}
                        {entry.mood === "sad" && "😔"}
                        {entry.mood === "stressed" && "😰"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  You've been mostly positive this week! Keep up the great work.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Current Streak</span>
                    <Badge variant="secondary">5 days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Check-ins</span>
                    <Badge variant="secondary">47</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Average Mood</span>
                    <Badge variant="secondary">Good 🙂</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Personalized Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-3 bg-secondary-soft rounded-lg">
                      <div className="flex items-start gap-3">
                        <span className="text-lg">{rec.icon}</span>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{rec.title}</p>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {rec.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {rec.time}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};