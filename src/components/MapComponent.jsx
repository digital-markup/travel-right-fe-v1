import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";

const MapComponent = ({ startAddress, endAddress }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    // Initialize the map and set the container to mapContainerRef.current
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [80.64134645286987, 7.293747339023006],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });

    const findLocations = async (startAddress, endAddress) => {
      try {
        const startLocation = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: startAddress,
              key: import.meta.env.VITE_GOOGLE_MAP_KEY,
            },
          }
        );

        const endLocation = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: endAddress,
              key: import.meta.env.VITE_GOOGLE_MAP_KEY,
            },
          }
        );

        setStart(startLocation.data.results[0].geometry.location);
        setEnd(endLocation.data.results[0].geometry.location);
      } catch (error) {
        console.error("Error fetching geocode:", error);
      }
    };

    findLocations(startAddress, endAddress);

    // Clean up on component unmount
    return () => mapRef.current.remove();
  }, [startAddress, endAddress]);

  useEffect(() => {
    const getDirections = async () => {
      if (!start || !end) return; // Wait until both start and end locations are set

      try {
        const response = await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}`,
          {
            params: {
              access_token: mapboxgl.accessToken,
              geometries: "geojson",
            },
          }
        );

        const data = response.data.routes[0].geometry;
        if (mapRef.current.getSource("route")) {
          mapRef.current.getSource("route").setData(data);
        } else {
          mapRef.current.addSource("route", {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: data,
            },
          });

          mapRef.current.addLayer({
            id: "route",
            type: "line",
            source: "route",
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "red",
              "line-width": 6,
              "line-opacity": 0.8,
            },
          });
        }
      } catch (error) {
        console.error("Error fetching directions:", error);
      }
    };

    // Only call getDirections if both start and end locations are available
    if (start && end) {
      getDirections();
    }
  }, [start, end]);

  return (
    <div className="w-[800px] h-[500px] rounded-2xl overflow-hidden">
      <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default MapComponent;
