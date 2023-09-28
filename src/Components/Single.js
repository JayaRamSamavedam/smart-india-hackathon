
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
import "../style.css";
const abc={
  "Srinagar" : "800/sq ft",
"Anantnag" : "1000/per item",
"Baramulla" : "2800/per item",
"Samba" : "5000/per item",
"Jammu" : "750/per item",
"Kathua" : "3200/per item",
"Udhampur" : "820/per item",
"Kupwara" : "2000/kg",
"Pulwama" : "500/g",
"Doda" : "500/per item",
"Kishtwar" : "150/kg",
"Rajouri" : "155/kg",
"Poonch" : "800/per item",
"Ramban" : "649/per item",
"Budagam" : "399/per item",
"Bandipora" : "790/per item",
"Ganderbal" : "2650/per item",
"Reasi" : "250/kg",
"Kulgam" : "50/kg",
"Shopian" : "220/kg",
}
const dd={
  "Anantanag":{
    "img":"Anantnag.jpg",
    "head":"Cricket Bats",
    "des":"Anantnag District, Cricket Bats of Anantnag are world famous and they are made to suit every format of the game.",
  },
  "Baramulla":{
    "img":"Baramulla.jpg",
    "head":"Vedic Hymns",
    "des":"Baramulla is renowned for its rich cultural heritage,This historical significance places Baramulla as a repository of ancient wisdom and spiritual traditions. The district's connection to Vedic hymns underscores its historical and cultural importance, preserving the age-old heritage of India's spiritual tapestry.",
  },
  "Samba":{
    "img":"Samba.jpg",
    "head":"Calico Painting",
    "des":"Samba is also famous for traditional Calico Printing, where local dyes and wooden blocks are used for block printing of weaved cotton fabrics (bed sheets). It is for this reason that it is also known as 'City of Sheets'.",
  },
  "Jammu":{
    "img":"Jammu.jpg",
    "head":"Papier-mache",
    "images":["img.jpg","img.jpg","img.jpg"
    ],
    "des":"Jammu is renowned for its masterful craftsmanship, featuring intricate wooden carvings, exquisite silverware, and delicate papier-mâché creations. These artistic treasures are a testament to the region's rich cultural heritage, passed down through generations of skilled artisans. Jammu's wooden works, silverware, and papier-mâché items are highly valued for their beauty and craftsmanship, attracting art enthusiasts from around the world.",
  },
  "Kathua":{
    "img":"Kathua.jpg",
    "head":"Basholi paintings",
    "des":"Kathua is famed for its production of unique Basholi paintings, a traditional Indian art form. These intricate and vibrant paintings have a rich cultural heritage and are treasured for their exquisite beauty. Kathua's contribution to Basholi art adds to India's artistic legacy.",
  },
  "Udhampur":{
    "img":"Udhampur.jpg",
    "head":"Crochet gift items",
    "des":"Udhampur District is renowned for its craftsmanship in creating exquisite crochet gift items. These intricately designed creations showcase the region's skilled artisans, offering a wide range of beautifully handcrafted gifts. Udhampur's crochet items are cherished for their intricate detailing and serve as delightful presents for various occasions.",
  },
  "Kupwara":{
    "img":"Kupwara.jpg",
    "head":"Walnuts",
    "des":"Walnuts are famous for the district of Kupwara in Jammu and Kashmir. Kupwara is known for its production of high-quality walnuts, which are sought after for their taste and quality. The region's climate and soil conditions are conducive to walnut cultivation, making it a significant walnut-producing area in the state.",
  },
  "Pulwama":{
    "img":"Pulwama.jpg",
    "head":"Safforn threads",
    "des":"Pulwama is internationally renowned for its exceptional saffron cultivation, boasting some of the world's finest saffron threads. Its distinctive climate and fertile soil contribute to the spice's unparalleled quality, characterized by remarkable flavor, aroma, and vibrant color, showcasing the region's saffron heritage.",
  },
  "Doda":{
    "img":"Doda.jpg",
    "head":"Tribal Jewelry",
    "des":"Doda is renowned for its traditional tribal jewelry, pottery, and unique food products, all of which showcase the region's rich heritage and craftsmanship, adding to its cultural diversity.",
  },
  "Kishtwar":{
    "img":"Kishtwar.jpg",
    "head":"Rajma Beans",
    "des":"Kishtwar is famed for its exceptional handwoven textiles and prized Kishtwari Rajma (kidney beans), representing a rich tapestry of craftsmanship and culinary tradition.",
  },
  "Rajouri":{
    "img":"Rajouri.jpeg",
    "head":"Basmati Rice",
    "des":"Rajouri is renowned for producing fine-quality Basmati rice and preserving its cultural heritage through traditional handicrafts.",
  },
  "Poonch":{
    "img":"Poonch.jpeg",
    "head":"Handmade crafts",
    "des":"Poonch is celebrated for its distinct Pashmina shawls and exquisite handmade crafts, showcasing the region's artisanal expertise and cultural heritage.",
  },

  "Ramban":{
    "img":"Ramban.jpg",
    "head":"Sulai Honey",
    "des":"Ramban Sulai Honey have earned coveted Geographical Indication (GI) Tag.The process for GI Tagging of these products was initiated by the Department of Agriculture & Farmers Welfare, Jammu.",
  },

  "Budagam":{
    "img":"Budagam.jpg",
    "head":"Mala Kol",
    "des":"Mala Kol, known as the 'deaf and dumb stream,' is a beautiful spring in Budgam district. Legend has it that this serene stream silently trailed the saint Syed Taj-ud-Din from Sukhnag to Sikandarpora, flowing through dense forests before merging with the Sut Haran.",
  },
  "Bandipora":{
    "img":"Bandipora.jpg",
    "head":"Woven willows",
    "des":"Bandipora is renowned for its high-quality willow production and the preservation of traditional handicrafts. The region's expertise in crafting with willow and its rich heritage of handicrafts contribute to its cultural and economic significance.",
  },
  "Ganderbal":{
    "img":"Ganderbal.jpg",
    "head":"Gabba Carpets",
    "des":"Ganderbal is celebrated for its handwoven carpets, notably the Gabba carpets, and a variety of textile products. These artisanal creations reflect the region's craftsmanship and add to its reputation for producing exquisite textiles.",
  },

  "Reasi":{
    "img":"Reasi.jpg",
    "head":"Horticultural Products",
    "des":"Reasi is renowned for its top-tier apples and premium horticultural products, thriving in its pristine climate and fertile soils. This region plays a pivotal role in Jammu and Kashmir's agricultural excellence, yielding world-class produce.",
  },



  "Kulgam":{
    "img":"Kulgam.jpg",
    "head":"Vegitables",
    
    "des":"Kulgam District in Kashmir is often referred to as the 'Vegetable Village of the Valley.' This nickname is well-deserved due to its significant cultivation of various vegetables. The region's fertile soil, suitable climate, and agricultural expertise make it a hub for vegetable production, contributing substantially to the local and regional supply of fresh produce.",
  },  

  "Shopian":{
    "img":"Shopian.jpg",
    "head":"Apples",
    "des":"Shopian is renowned for its horticultural products, particularly the cultivation of apples. The region's favorable climate and fertile soil make it ideal for producing high-quality apples, contributing significantly to Jammu and Kashmir's apple production and export.",
  }
  
} 
const marker={
  "Kashmiri Carpets":{
    "District":"Srinagar",
    "geocode":[34.1142,74.8006],
    "popUp":"Zadibal"
  },
  "Willow Cricket Bats":{
    "District":"Anantanag",
    "geocode":[34.1366,74.7703],
    "popUp":"Sangam"
  },
  "Vedic Hymns":{
    "District":"Baramulla",
    "geocode":[34.1343,74.8028],
    "popUp":"Heewan"
  },
  "Calico Painting":{
    "District":"Samba",
    "geocode":[32.5755,75.1097],
    "popUp":"Samba"
  },
  "Papier-mache":{
    "District":"Jammu",
    "geocode":[32.7682,74.7379],
    "popUp":"Lenrian",
  },
  "Basholi paintings":{
    "District":"Kathua",
    "geocode":[32.4295,75.5523],
    "popUp":"Kathua",
  },
  "Crochet gift items":{
    "District":"Udhampur",
    "geocode":[33.3428,74.7488],
    "popUp":"Chakal"
  },
  "Walnuts":{
    "District":"Kupwara",
    "geocode":[34.5266,74.2567],
    "popUp":"Kupwara"
  },
  "Safforn threads":{
    "District":"Pulwama",
    "geocode":[34.0105,74.9179],
    "popUp":"Pampore",
  },
  "Tribal Jewelry":{
    "District":"Doda",
    "geocode":[33.1456,75.5475],
    "popUp":"Khuranti"
  },
  "Rajma Beans":{
    "District":"Kishtwar",
    "geocode":[33.3087,75.7727],
    "popUp":"Kadil"
  },
  "Basmati Rice":{
    "District":"Rajouri",
    "geocode":[33.3773,74.3132],
    "popUp":"Dhar"
  },
  "Handmade crafts":{
    "District":"Poonch",
    "geocode": [33.768,74.095],
    "popUp": "Dharti"
  },
  "Sulai Honey":{
    "District":"Ramban",
    "geocode":[33.1456,75.5475],
    "popUp":"Chareel"
  },
  "Mala Kol":{
    "District":"Budagam",
    "geocode":[33.9102,74.6587],
    "popUp":"Aragam"
  },
  "Woven willows":{
    "District":"Bandipora",
    "geocode":[34.4986,74.6906],
    "popUp":"Gamroo"
  },
  "Gabba Carpets":{
    "District":"Ganderbal",
    "geocode":[34.1914,74.7963],
    "popUp":"Hadura"
  },
  "Horticultural Products":{
    "District":"Reasi",
    "geocode":[33.0792,74.8363],
    "popUp":"Dharmari"
  },
  "Vegitables":{
    "District":"Kulgam",
    "geocode":[33.6706,75.0409],
    "popUp":"Wanigund"
  },
  "Apples":{
    "District":"Shopian",
    "geocode":[33.7216,74.8079],
    "popUp":"Mandi"
  },
}
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("../static/icons/placeholder.png"),
    iconSize: [38, 38] // size of the icon
  });

  const createClusterCustomIcon = function (cluster) {
  
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),    
    });
  };
  
const Single = (props) => {

  // console.log(c["District"])
  if(!props.prod){
    return (
      <div>
         <p className="font-extrabold">Select a Product first </p>
      </div>
    );
  }
  const c=marker[String(props.prod)]
  const des=dd[c["District"]]
  return (
    <>
        <div className="container-2xl border-spacing-5">
          <h1 className="justify-center items-center text-center font-bold text-2xl">{props.prod}</h1>
        <div className='bg-gradient-to-r from-violet-300 to-violet-400 dark:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 '>
        <div className='flex justify-center items-center'>
          <figure className="p-5 max-w-5xl">
            <img
              className="h-auto max-w-3xl rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:scale-110"
              src={`./SIH/${String(c["District"])}.jpg`}
              alt="image description"
              style={{ width: '100%', height: '300px' }}
            />
            <figcaption className="mt-2 text-3xl text-center text-gray-500 dark:text-gray-400">{c["District"]}</figcaption> 
          </figure>
        </div>
         <div className="container mx-auto">
          <p className='text-2xl p7 text-center text-slate-950 dark:text-pink-600'>Price - {abc[c["District"]]}</p><br/>
          <p className='text-2xl p7 text-center dark:text-yellow-300 text-slate-950'>{des["des"]} </p>
        </div>
        <div className="Map border-spacing-4" >
      <MapContainer center={c["geocode"]} zoom={14}>
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
          

            <Marker position={c["geocode"]} icon={customIcon} >
              
            <Popup>
              
                  {c["popUp"]}

              </Popup>
              
            </Marker>
                      
        </MarkerClusterGroup>
      </MapContainer>
      
    </div>
      </div>
        </div>

    </>
  )
}

export default Single