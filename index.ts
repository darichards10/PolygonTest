/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example uses the Google Maps JavaScript API's Data layer
// to create a rectangular polygon with 2 holes in it.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 16,
      center: { lat: 37.1378, lng: -80.551 },
    }
  );

  // Define the LatLng coordinates for the outer path.
  const outerCoords = [
    { lat: 37.134803, lng: -80.549452 }, // north west
    { lat: 37.135021, lng: -80.549268 }, // south west
    { lat: 37.134807, lng: -80.548887 }, // south east
    { lat: 37.134571, lng: -80.549074 }, // north east
  ];

  // Define the LatLng coordinates for an inner path.
  const innerCoords1 = [
    { lat: 37.135095, lng: -80.548839 },
    { lat: 37.134996, lng: -80.548652 },
    { lat: 37.135462, lng: -80.548169},
    { lat: 37.135617, lng: -80.548465 },
  ];

  // Define the LatLng coordinates for another inner path.
  const innerCoords2 = [
    { lat: -33.364, lng: 156.207 },
    { lat: -34.364, lng: 156.207 },
    { lat: -34.364, lng: 157.207 },
    { lat: -33.364, lng: 157.207 },
  ];

  map.data.add({
    geometry: new google.maps.Data.Polygon([
      outerCoords,
      innerCoords1,
      innerCoords2,
    ]),
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
