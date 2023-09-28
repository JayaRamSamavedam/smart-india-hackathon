import React from 'react'
import { useEffect } from 'react';
const  Travel= () => {
    useEffect(() => {
        async function fetchLocationData() {
          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            if (response.data.address && response.data.address.state) {
              setUserLocation(response.data.address.state);
            } else {
              setUserLocation("State not found");
            }
          } catch (error) {
            console.error("Error fetching location data:", error);
          }
        }
    
        fetchLocationData();
      }, [latitude, longitude]);
    
      const fetchUserLocation = () => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            // const latitude = 17.5892;
            // const longitude = 78.9448;
    
            setLatitude(latitude);
            setLongitude(longitude);
          });
        } else {
          setUserLocation("Geolocation is not available in this browser.");
        }
      };
      useEffect(() => {
        fetchUserLocation();
      }, []);

  return (
    <div></div>
  )
}

export default Travel

