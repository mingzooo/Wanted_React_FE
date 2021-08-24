import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const MapContent = ({ lat, lon }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('myMap'),
      mapOption = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const markerPosition = new kakao.maps.LatLng(lat, lon);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function () {
      window.open(`https://map.kakao.com/link/map/위치,${lat},${lon}`);
    });
  }, []);

  return (<MapContainer id="myMap"></MapContainer>);
};

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;

export default MapContent;
