import React from 'react'
import './Map.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { showDataOnMap } from "../../util"

function Maps({countries, casesType, center, zoom}) {
    return (
        <div className= "map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMaps</a> contributors'
                />
            {showDataOnMap(countries, casesType)}
            </MapContainer>

        </div>
    )
}

export default Maps;
