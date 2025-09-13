import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const moodOptions = [
  { value: "happy", emoji: "😊", label: "Happy", color: "mood-happy" },
  { value: "good", emoji: "🙂", label: "Good", color: "mood-good" },
  { value: "neutral", emoji: "😐", label: "Neutral", color: "mood-neutral" },
  { value: "sad", emoji: "😔", label: "Sad", color: "mood-sad" },
  { value: "stressed", emoji: "😰", label: "Stressed", color: "mood-stressed" },
];

interface MoodSelectorProps {
  selectedMood?: string;
  onMoodSelect: (mood: string) => void;
  className?: string;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
  className,
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="text-lg font-semibold mb-4 text-center">How are you feeling today?</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {moodOptions.map((mood) => (
          <Button
            key={mood.value}
            variant={selectedMood === mood.value ? "default" : "outline"}
            onClick={() => onMoodSelect(mood.value)}
            className={cn(
              "flex flex-col items-center justify-center h-20 transition-all duration-300",
              selectedMood === mood.value
                ? `bg-${mood.color} text-white shadow-medium`
                : "hover:shadow-soft"
            )}
          >
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-xs">{mood.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};