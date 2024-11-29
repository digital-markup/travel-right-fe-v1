import React from "react";
import { BarChart, Brain, Database, Globe, Map, Shuffle } from "lucide-react";

const ProductDetailsGrid = () => {
  const features = [
    {
      title: "Real-Time Route Visualization",
      description:
        "Access detailed routes with step-by-step directions and distance/time estimates.",
      icon: BarChart,
    },
    {
      title: "AI-Powered Location Insights",
      description:
        "Recommendations tailored to your preferences, including cultural landmarks, adventure spots, and more.",
      icon: Brain,
    },
    {
      title: "User-Uploaded Data Integration",
      description:
        "Use AI-powered features to generate new waypoints or update existing routes.",
      icon: Database,
    },
    {
      title: "Tour Package Integration",
      description: "Explore curated tour packages mapped out on the platform.",
      icon: Globe,
    },
    {
      title: "3D Visualization of Destinations",
      description:
        "Experience an immersive 3D view of waypoints, allowing users to virtually explore locations before visiting.",
      icon: Map,
    },
    {
      title: "Flexible Route Adjustments",
      description:
        "Modify your travel route with ease, choosing alternative paths for a more scenic or efficient journey.",
      icon: Shuffle,
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

export default ProductDetailsGrid;
