
import React, { useRef, useState } from 'react'
import Single from './Single';
import Language from './Language';
const pp=["Kashmiri Carpets","Willow Cricket Bats","Vedic Hymns","Calico Painting","Papier-mache","Basholi paintings","Crochet gift items","Walnuts","Safforn threads","Tribal Jewelry","Rajma Beans","Basmati Rice","Handmade crafts","Sulai Honey","Mala Kol","Woven willows","Gabba Carpets","Horticultural Products","Vegitables","Apples"]
const ps={

  "Basholi paintings":{
    "District":"Kathua",
  },
      
      "Willow Cricket Bats":{
        "District":"Anantanag",
      },
      "Vedic Hymns":{
        "District":"Baramulla",
      },
      "Calico Painting":{
        "District":"Samba",
      },
      "Papier-mache":{
        "District":"Jammu",
      },
      
      "Crochet gift items":{
        "District":"Udhampur",
      },
      "Walnuts":{
        "District":"Kupwara",
      },
      "Safforn threads":{
        "District":"Pulwama",
      },
      "Tribal Jewelry":{
        "District":"Doda",
      },
      "Rajma Beans":{
        "District":"Kishtwar",
      },
      "Basmati Rice":{
        "District":"Rajouri",
      },
      "Kashmiri Carpets":{
        "District":"Srinagar",
      },
      "Handmade crafts":{
        "District":"Poonch",
      },
      "Sulai Honey":{
        "District":"Ramban",
      },
      "Mala Kol":{
        "District":"Budagam",
      },
      "Woven willows":{
        "District":"Bandipora",
      },
      "Gabba Carpets":{
        "District":"Ganderbal",
      },
      "Horticultural Products":{
        "District":"Reasi",
      },
      "Vegitables":{
        "District":"Kulgam",
      },
      "Apples":{
        "District":"Shopian",
      },
}
const Products = () => {
  const [prod,setprod] = useState(null);
  const ref = useRef(null);

  const handleClick = (prod) => {
    setprod(prod);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-aos="fade-right" className="Products dark:bg-slate-950" style={{"backgroundImage": "linearGradient(to top, #fbc2eb 0%, #a6c1ee 100%)"}}>
        <div data-aos="flip-left" className="Abcd grid grid-cols-4 gap-0">
        {Object.entries(ps).map(([product, details]) => (
            <div className='px-5'>
          <li key={product}>
            <strong className='font-extrabold text-xl dark:text-blue-500'>{product}</strong><br/><strong className='font-bold text-md dark:text-blue-500'> District: {details.District}</strong>
          </li>

        
<div data-aos="fade-right" class="max-w-sm bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="py-3 bg-gradient-to-r from-cyan-500 to-blue-500 dark :bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg ransition duration-300 ease-in-out hover:scale-110" src={`./SIH/${details.District}.jpg`} alt="" style={{ width: '100%', height: '300px' }}/>
    </a>
    <div className="p-5 bg-gradient-to-r f+om-cyan-500 to-blue-500">
        <a>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product}<br/>{details.District}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-slate-50">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button type="button" onClick={()=>handleClick(product)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore More</button>
    </div>
</div>
          </div>
        ))}
        </div>
        <div ref={ref}>
        <Single prod={prod}/>
        </div>
    </div>
  );
}

export default Products
