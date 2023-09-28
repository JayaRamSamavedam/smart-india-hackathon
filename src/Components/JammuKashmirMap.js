import "../style.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Link, NavLink, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Icon, divIcon, point } from "leaflet";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import District from "./District";
// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require("../static/icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),    
  });
};

// markers
const markers = [
  {
    geocode: [32.7682,74.7379],
    popUp: "Jammu"
  },
  {
    geocode: [32.4295,75.5523],
    popUp: "Kathua"
  },
  {
    geocode: [32.5755,75.1097],
    popUp: "Samba"
  },
  {
    geocode: [33.768,74.095],
    popUp: "Poonch"
  },
  {
    geocode:[33.3773,74.3132],
    popUp:"Rajouri"
  },
  {
    geocode:[33.0792,74.8363],
    popUp:"Reasi"
  },
  {
    geocode:[33.2398,75.2426],
    popUp:"Ramban"
  },
  {
    geocode:[33.1456,75.5475],
    popUp:"Doda"
  },
  {
    geocode:[33.3087,75.7727],
    popUp:"Kishtwar"
  },


  {
    geocode:[34.0765,74.8224],
    popUp:"Srinagar"
  },
// Udhampur
{
  geocode:[32.9891,74.7729],
  popUp:"Udhampur"
},
  {
    geocode:[33.745,75.278],
    popUp:"Anantnag"
  },
  {
    geocode:[33.8736,74.8999],
    popUp:"Pulwama"
  },
  {
    geocode:[34.5266,74.2567],
    popUp:"Kupwara"
  },
  {
    geocode:[33.7216,74.8079],
    popUp:"Shopian"
  },
  {
    geocode:[34.1914,74.7963],
    popUp:"Ganderbal"
  },
  {
    geocode:[34.4986,74.6906],
    popUp:"Bandipora"
  },
  {
    geocode:[34.2084,74.3445],
    popUp:"Baramulla"
  },
  {
    geocode:[33.9102,74.6587],
    popUp:"Budgam"
  },
  {
    geocode:[33.6706,75.0409],
    popUp:"Kulgam"
  },
];

export default function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [state,setstate] = useState(null)
  const navigate = useNavigate("/");
  return (
    <body  className="dark:bg-black" style={{ boxSizing: "border-box",margin: "0",
      padding: "0"}}>
    <div className="Map bg-gradient-to-r from-cyan-500 to-blue-500  dark:bg-black" >
      <MapContainer center={[33.100,75.600]} zoom={9}>
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* WATERCOLOR CUSTOM TILES */}
        {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
        {/* GOOGLE MAPS TILES */}
        {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {/* Mapping through the markers */}
          {markers.map((marker) => (

            <Marker position={marker.geocode} icon={customIcon} 
            eventHandlers={{
              click: () => {
                setstate(marker.popUp)
                handleClick();
                // navigate(`/nav/${marker.popUp}`);
              },
            }}>
              
            <Popup>
              
                  {marker.popUp}

              </Popup>
              
            </Marker>
                      
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      
    </div>
    <div ref={ref}>
    <District state={state}/>
    </div>
    </body>
  );
}
