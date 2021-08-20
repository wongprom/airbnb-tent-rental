import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib/es';
import { LocationMarkerIcon } from '@heroicons/react/outline';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  //    geolib.getCenter([
  //     { latitude: 52.516272, longitude: 13.377722 },
  //     { latitude: 51.515, longitude: 7.453619 },
  //     { latitude: 51.503333, longitude: -0.119722 },
  // ]);

  const coordinates = searchResults?.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/wongprom/cksiotnlc38x217r3qhpbqq06"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              onClick={() => setSelectedLocation(result)}
              // stroke="#080AEF"
              fill="#8c8c8c"
              // strokeWidth={5}
              className={`h-8 w-8 cursor-pointer ${
                selectedLocation?.long !== result?.long ? 'animate-bounce' : ''
              }`}
            />
          </Marker>

          {/* display popup if marker is clicked */}
          {selectedLocation?.long === result?.long && (
            <Popup
              className="z-50"
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result?.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
