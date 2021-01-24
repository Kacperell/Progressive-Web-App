import React, { useState, useEffect, useRef } from 'react'
import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './GPS.scss'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

function GPS() {
    const [location, setLocation] = useState(null);
    const mapEl = useRef(null);
    useEffect(() => {

        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            setLocation([position.coords.latitude, position.coords.longitude]);
        });


    }, []);

    return (
        <div className='gps'>
            {location &&
                <MapContainer ref={mapEl} id='map' center={location} zoom={13} >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={location}>
                        <Popup>
                            <span>A pretty CSS3 popup Easily customizable.</span>
                        </Popup>
                    </Marker>
                </MapContainer>
            }

            <span>
                Twoje współrzędne: {location}
            </span>
        </div>
    )
}

export default GPS
