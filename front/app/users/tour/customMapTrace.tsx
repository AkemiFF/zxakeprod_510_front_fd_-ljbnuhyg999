import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

type LocationType = { lat: number; lng: number };

const GoogleMapTrace = ({ origin, destination, zoom = 8 }: { origin: LocationType; destination: LocationType; zoom?: number }) => {
    const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
        libraries: ["places"]
    });

    useEffect(() => {
        if (isLoaded && origin && destination) {
            const directionsService = new google.maps.DirectionsService();
            directionsService.route(
                {
                    origin,
                    destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        console.log('Directions Response:', result); 
                        setDirectionsResponse(result);
                    } else {
                        console.error(`Error fetching directions: ${status}`);
                    }
                }
            );
        }
    }, [isLoaded, origin, destination]);

    if (loadError) {
        return <div>Error loading maps: {loadError.message}</div>;
    }

    if (!isLoaded) {
        return <div>Loading Maps...</div>;
    }

    return (
        <GoogleMap mapContainerStyle={{ width: '100%', height: '400px', marginTop:'2rem' }} center={origin} zoom={zoom}>
            <Marker position={origin}  />
            <Marker position={destination}  />
          
            {directionsResponse ? (
                <DirectionsRenderer
                    directions={directionsResponse}
                    options={{
                        polylineOptions: {
                            strokeColor: '#FF0000',
                            strokeWeight: 4,
                        },
                    }}
                />
            ) : (
                <div>Fetching directions...</div>
            )}
        </GoogleMap>
    );
};

export default GoogleMapTrace;
