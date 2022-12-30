import * as React from 'react';
import { useRef, useEffect } from 'react';

import config from './config';
import { loadGoogleMaps } from '@utils/common';

export type Hall = {
  id: number
  lat: number
  lng: number
};

type MapProps = {
  halls: Hall[]
  activeHallId: number
  onHallClick: (hall: Hall) => void
  className?: string
};

export const HallsMap: React.FC<MapProps> = ({
  halls,
  activeHallId,
  onHallClick,
  className,
}) => {
  const rootRef = useRef(null);

  /* tslint:disable:no-any */
  const mapRef = useRef<any>();

  const zoomOnActiveHall = () => {
    if (mapRef.current) {
      const activeHall = halls.find(hall => hall.id === activeHallId);

      mapRef.current.setZoom(14);
      mapRef.current.panTo(new google.maps.LatLng(activeHall.lat, activeHall.lng));
    }
  };

  // Map initialization with all markers
  useEffect(
    () => {
      loadGoogleMaps().then(
        () => {
          if (!rootRef.current) {
            return;
          }
          const map = new google.maps.Map(
            rootRef.current,
            config,
          );
          const bounds = new google.maps.LatLngBounds();

          for (const hall of halls) {
            const marker = new google.maps.Marker({
              position: new google.maps.LatLng(hall.lat, hall.lng),
              icon: '',
              map,
            });
            marker.addListener('click', () => onHallClick(hall));
            bounds.extend(marker.position);
          }

          map.fitBounds(bounds);
          mapRef.current = map;

          zoomOnActiveHall();
        }
      );
    },
    [],
  );

  // Focus on new marker when active hall changes
  useEffect(
    zoomOnActiveHall,
    [activeHallId],
  );

  return (
    <div
      ref={rootRef}
      className={className}
    />
  );
};