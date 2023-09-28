import React from 'react';
import { useState } from 'react';
import Single from './Single';
const dd={
  "Anantanag":{
    "img":"Anantanag.jpg",
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
const District = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  // Ensure props is a string and exists in dd
  const districtKey = String(props.state);
  const c = dd[districtKey]
  console.log(typeof(props.state))
  if (c) {
    return (
      <div className='dark:bg-slate-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <div className='flex justify-center items-center'>
          <figure className="p-5 max-w-5xl">
            <img
              className="h-auto max-w-3xl rounded-lg flex justify-center items-center transition duration-300 ease-in-out hover:scale-110"
              src={`./SIH/${c["img"]}`}
              alt="image description"
              style={{ width: '100%', height: '300px' }}
            />
            <figcaption className="mt-2 text-3xl font-extrabold text-center text-gray-500 dark:text-gray-400">{c["head"]}</figcaption>
          </figure>
        </div>
        <div className="container mx-auto">
          <p className='md:spi text-2xl p7 text-center text-yellow-300 dark:text-pink-600'>{c["des"]}</p>
          <button type="button" onClick={toggleContentVisibility} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get More Details</button>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='ABc'>
       {isContentVisible && <Single prod={c["head"]} />}
        </div>
<div class="grid grid-cols-2 gap-2">
  
{/* {c.images.map((image, index) => (
    <div>
    <img class="h-auto max-w-full rounded-lg" src={`./${image}`} alt={`Image ${index}`}/>
</div>
  ))} */}
        
    </div>
      </div>
    );
  } else {
    return (
      <div>
         <p className="font-extrabold">Select a District </p>
      </div>
    );
  }
}

export default District;
