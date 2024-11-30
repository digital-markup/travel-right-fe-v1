/* eslint-disable react/prop-types */
import React, { useRef, useState, useCallback } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = ({ startAddress, endAddress }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  // Fetch base locations
  const onFetchLocations = useCallback(() => {
    const findLocations = async (startAddress, endAddress) => {
      try {
        const startLocation = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${startAddress}, Sri Lanka`,
              key: import.meta.env.VITE_GOOGLE_MAP_KEY,
            },
          }
        );

        const endLocation = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${endAddress}, Sri Lanka`,
              key: import.meta.env.VITE_GOOGLE_MAP_KEY,
            },
          }
        );
        return {
          departure: startLocation.data.results[0].geometry.location,
          destination: endLocation.data.results[0].geometry.location,
        };
      } catch (error) {
        console.error("Error fetching geocode:", error);
      }
    };

    const response = findLocations(startAddress, endAddress);
    response.then((data) => {
      if (typeof data !== "undefined") {
        setStart(data.departure);
        setEnd(data.destination);
      }
    });
  }, [endAddress, startAddress]);

  const addMarkers = React.useCallback((map, start, end) => {
    // Remove existing markers if any
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Add start marker
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([start.lng, start.lat])
      .addTo(map);

    // Add end marker
    new mapboxgl.Marker({ color: 'green' })
      .setLngLat([end.lng, end.lat])
      .addTo(map);

    // Fit map to bounds of start and end points
    const bounds = new mapboxgl.LngLatBounds()
      .extend([start.lng, start.lat])
      .extend([end.lng, end.lat]);
    map.fitBounds(bounds, { padding: 100 });
  }, []);

  const onFetchDirections = useCallback(() => {
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

        const routeGeometry = response.data.routes[0].geometry;
        return routeGeometry;
      } catch (error) {
        console.error("Error fetching directions:", error);
      }
    };

    const directions = getDirections();
    directions.then((data) => {
      const map = mapRef.current;
      if (!map) return;

      // Add markers
      addMarkers(map, start, end);

      // Remove existing route source and layer if they exist
      if (map.getSource('route')) {
        map.removeLayer('route');
        map.removeSource('route');
      }

      // Add new route source and layer
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: data,
        },
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': 'blue',
          'line-width': 6,
          'line-opacity': 0.8,
        },
      });
    });
  }, [end, start, addMarkers]);

  // First render
  React.useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    // Initialize the map and set the container to mapContainerRef.current
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [80.64134645286987, 7.293747339023006],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      antialias: true,
    });

    // Store the map reference
    mapRef.current = map;

    // Wait for the map style to load before calling other functions
    map.on('style.load', () => {
      onFetchLocations();
    });

    // Clean up on component unmount
    return () => map.remove();
  }, [onFetchLocations]);

  React.useEffect(() => {
    // Only call getDirections if both start and end locations are available
    if (start && end) {
      onFetchDirections();
    }
  }, [start, end, onFetchDirections]);

  return (
    <div className="min-w-[700px] h-[500px] rounded-2xl overflow-hidden flex justify-center">
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default MapComponent;
