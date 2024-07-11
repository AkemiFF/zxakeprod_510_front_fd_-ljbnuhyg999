import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

type LocationType = { lat: number; lng: number };

const GoogleMapComposant = ({ location, zoom = 17 }: { location: LocationType; zoom?: number }) => {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAnpvGGD_L2VHEEC-JZ-FEtiT2UvdxQNeY"
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