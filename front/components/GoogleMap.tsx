import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';




const GoogleMapComposant = ({ location, zoom = 15 }) => {
    return (
        <LoadScript
            googleMapsApiKey=""
            libraries={['places']}
        >
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={location}
                zoom={zoom}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComposant;
