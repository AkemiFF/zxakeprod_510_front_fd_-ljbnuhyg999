import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { stringify } from 'querystring';
import { useLoadScript } from "@react-google-maps/api";

type LocationType = { lat: number; lng: number };

const GoogleMapComposant = ({ location, zoom }: { location: LocationType; zoom?: number }) => {
    const faipfnskqdlfhuronfqsmdoifoqne = process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string;

    return (
        <LoadScript
            googleMapsApiKey={faipfnskqdlfhuronfqsmdoifoqne}
            libraries={["places", "marker"]}
        >
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                center={location}
                zoom={zoom}
            // mapId="DEMO_MAP_ID"
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};



export default GoogleMapComposant;