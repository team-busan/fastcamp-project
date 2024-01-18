import { useState, useEffect, useRef } from "react";

function NaverMap({ width }) {
  const mapElement = useRef(null);
  const { naver } = window;

  const [myLocation, setMyLocation] = useState({});

  const success = (position) => {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const error = () => {
    setMyLocation({ latitude: 37.5656, longitude: 126.9779 });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(
      myLocation.latitude,
      myLocation.longitude
    );
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [myLocation]);

  return (
    <div
      ref={mapElement}
      className={`h-screen`}
      style={{ width: `calc(${width})` }}
    ></div>
  );
}

export default NaverMap;
