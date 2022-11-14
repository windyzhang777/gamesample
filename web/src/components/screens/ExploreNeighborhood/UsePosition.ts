import {useState, useEffect} from 'react';
import {GeoLocation} from 'shared/models/GeoLocation';

const defaultSettings = {
  enableHighAccuracy: true,
  timeout: Infinity,
  maximumAge: 0,
};

export const usePosition = (watch = true, settings = defaultSettings): GeoLocation => {
  const [position, setPosition] = useState<GeoLocation>();
  const [error, setError] = useState<string>();

  const onChange = ({coords, timestamp}: Position) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error: PositionError) => {
    setError(error.message);
  };

  useEffect(() => {
    let watcher: number;
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
    } else {
      if (watch) {
        watcher = navigator.geolocation.watchPosition(onChange, onError, settings);
      } else {
        navigator.geolocation.getCurrentPosition(onChange, onError, settings);
      }
      return () => {
        if (watcher) {
          navigator.geolocation.clearWatch(watcher);
        }
      };
    }
  }, [settings.enableHighAccuracy, settings.timeout, settings.maximumAge, settings, watch]);

  return {
    ...position,
    error,
  } as GeoLocation;
};

export default usePosition;
