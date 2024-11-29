import React from "react";
import { MapPin, Compass, Umbrella, Brain, BarChart } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Tourist Location & Destination Search",
      description:
        "Allows users to find popular tourist locations and destinations in Sri Lanka based on their preferences.",
      icon: MapPin,
    },
    {
      title: "3D View of Waypoints",
      description:
        "Provides a 3D visualization of selected waypoints to enhance the user's travel planning experience.",
      icon: Compass,
    },
    {
      title: "Most Reviewed Restaurants & Lounges",
      description:
        "Displays the top-rated restaurants and lounges based on user reviews, helping users find the best places to eat and relax.",
      icon: Umbrella,
    },
    {
      title: "AI-powered GPT Model",
      description:
        "Uses a GPT model to generate personalized recommendations for tourist locations and waypoints based on user input.",
      icon: Brain,
    },
    {
      title: "Budget Creation",
      description:
        "Users create a detailed budget for their trip, covering travel, accommodations, and dining expenses based on their preferences.",
      icon: BarChart,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-xl border border-blue-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <feature.icon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
