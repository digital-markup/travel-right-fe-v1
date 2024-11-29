import React from "react";

const PlacesCard = ({title,description,image}) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-3xl shadow-lg bg-white">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt="" className="object-cover object-top"/>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-gray-700">Kandy</h3>
        </div>
        <p className="text-gray-600">
         {description}
        </p>
      </div>
    </div>
  );
};

export default PlacesCard;
