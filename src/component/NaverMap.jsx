import { useState, useEffect, useRef } from "react";
import useGeolocation from "../hooks/useGeolocation";

function NaverMap({ width, height,  isRounded, markers=[], onMarkerClick=()=>{}, zoomLevel= 10}) {
  const mapElement = useRef(null);
  const { naver } = window;

  const { geolocation: myLocation, error } = useGeolocation();

  useEffect(() => {
    if (!mapElement.current || !naver?.maps) return;

    const location = new naver.maps.LatLng(
      myLocation.latitude,
      myLocation.longitude
    );
    const mapOptions = {
      center: location,
      zoom: zoomLevel,
      zoomControl: false,
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    // const map = new naver.maps.Map("navermap", mapOptions);
    window.navermap = map;

    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [myLocation]);

  useEffect(() => {
    if (!mapElement.current || !naver?.maps || !window.navermap) return;

    markers.forEach((marker) => {
      const location = new naver.maps.LatLng(marker.lat, marker.lng);
      const mapMarker = new naver.maps.Marker({
        title: marker.title,
        clickable: true,
        position: location,
        map: window.navermap,
      });

      naver.maps.Event.addListener(mapMarker, 'click', (e) => {
        onMarkerClick({...marker})
      });
    });

  }, [markers]);

  useEffect(() => {
    if (!mapElement.current || !naver?.maps || !window.navermap) return;

    window.navermap.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div
      id="navermap"
      ref={mapElement}
      className={`${height} ${isRounded ? "rounded-b-2xl" : null}`}
      style={{ width: `calc(${width})` }}
    ></div>
  );
}

export default NaverMap;
