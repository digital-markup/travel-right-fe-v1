import React from "react";
import { LogIn, TentTree, DollarSign } from "lucide-react";

const ProcessGrid = () => {
  const features = [
    {
      title: "Sign Up",
      description: "Complete all work related to planning and processing.",
      icon: LogIn,
    },
    {
      title: "Exciting Travel",
      description:
        "Start and investigate an extensive range of interesting trip experience.",
      icon: TentTree,
    },
    {
      title: "Worth Of Money",
      description:
        "After successfully accessing the system, plan your budget for spending.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-xl border bg-mainColor border-blue-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-600 text-sm text-white">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessGrid;
