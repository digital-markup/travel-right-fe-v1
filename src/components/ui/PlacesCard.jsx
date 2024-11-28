import React from "react";

const PlacesCard = () => {
  return (
    <div className="max-w-md mx-auto overflow-hidden rounded-3xl shadow-lg bg-white">
      <div className="relative h-64 overflow-hidden">
        <img src="/maligawa.jpeg" alt="" className="object-cover object-top"/>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Temple of the Tooth
          </h2>
          <h3 className="text-xl font-semibold text-gray-700">Kandy</h3>
        </div>
        <p className="text-gray-600">
          Gautama Buddha's left canine tooth is housed in the Temple of the
          Sacred Tooth Relic, a recognised site of worship. The temple was
          designated a world heritage site by UNESCO in 1988, and hundreds of
          local and foreign tourists and devotees visit it every day.
        </p>
      </div>
    </div>
  );
};

export default PlacesCard;
