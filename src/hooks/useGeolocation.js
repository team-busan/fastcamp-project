import { useState, useEffect } from 'react';

const defaultLocation = { latitude: 37.5656, longitude: 126.9779 };

function useGeolocation() {
  const [location, setLocation] = useState(defaultLocation);
  const [error, setError] = useState(null);


  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const errorHandler = (error) => {
      setError(error.message);
      setLocation(defaultLocation);
    };

    if (navigator.geolocation) {
      let watchId = 
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setError('Geolocation is not supported by this browser.');
      setLocation(defaultLocation);
    }

    return () => {
      // Optional: Clean up any ongoing geolocation tracking (if used)
      if (navigator.geolocation) {
        // navigator.geolocation.clearWatch(watchId); // Replace 'watchId' if using watchPosition
      }
    };
  }, []); // Empty dependency array: Run effect only once after initial render

  return { geolocation: location, error };
}

export default useGeolocation;
