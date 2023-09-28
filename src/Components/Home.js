import React from 'react'
import Typewriter from "typewriter-effect";

// Srinagar - Kashmiri Carpets
// 2. Anantnag - Willow Cricket Bats
// 3. Baramulla - Vedic Hymns
// 4. Samba - Calico Painting
// 5. Jammu - Papier-mache
// 6. Kathua - Basholi paintings
// 7. Udhampur - Crochet gift items
// 8. Kupwara - Walnuts
// 9. Pulwama - Safforn threads
// 10.Doda - Tribal Jewelry
// 11. Kishtwar - Rajma Beans
// 12. Rajouri - Basmati Rice
// 13.Poonch - Handmade crafts
// 14. Ramban - Sulai Honey
// 15. Badgam - Mala Kol
// 16. Bandipora - Woven willows
// 17. Ganderbal - Gabba Carpets
// 18. Reasi - Horticultural Products
// 19. Kulgam - Vegitables
// 20. Shopian - Apples
const pp=["Kashmiri Carpets","Willow Cricket Bats","Vedic Hymns","Calico Painting","Papier-mache","Basholi paintings","Crochet gift items","Walnuts","Safforn threads","Tribal Jewelry","Rajma Beans","Basmati Rice","Handmade crafts","Sulai Honey","Mala Kol","Woven willows","Gabba Carpets","Horticultural Products","Vegitables","Apples"]
const Products={
      "Kashmiri Carpets":{
        "District":"Srinagar",
      },
      "Willow Cricket Bats":{
        "District":"Anantnag",
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
      "Basholi paintings":{
        "District":"Kathua",
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
      "Handmade crafts":{
        "District":"Poonch",
      },
      "Sulai Honey":{
        "District":"Ramban",
      },
      "Mala Kol":{
        "District":"Badgam",
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


const Home = () => {
  return (
    <div className='Home overscroll-none overflow-hidden'>
<div className="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
  <h1 className=" text-red-200 text-6xl font-bold font-mono dark:text-slate-50">
  <Typewriter
 onInit={(typewriter) => {
     typewriter
         .typeString("Jammu Kashmir")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Welcomes You")
         .deleteAll()
         .pauseFor(1000)
         .typeString("Let's Explore Our Products")
         .deleteAll()
         .pauseFor(1000)
         .typeString("Explore our map to get their District details")
         .start();
 }}
/>
  </h1>
</div>


<div className="bg-sea2 min-h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover bg-fixed overflow-auto ">

  <div className='px-8'>
  <h2 className="px-8 font-bold text-4xl text-slate-50 hover:text-pink-600 dark:text-black">Our Products</h2><br/>
  {/* <p className="px-8 text-slate-50 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p> */}
  
<div class="max-w-sm p-6 contaier-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chech Out Our Products </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="/Products" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Go There
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

  </div>
</div>



<div className="bg-sea3 min-h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover bg-fixed ">

  <div className='px-8 grid grid-cols-4 gap-3'>


  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>

  </div>
</div>
<div className="bg-sea2 min-h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover bg-fixed overflow-auto ">

<div className='Abcdefg grid grid-cols-3'>
  <div className='px-8'>
  <h2 className="px-8 font-bold text-4xl text-slate-50 hover:text-pink-600 dark:text-black">Moto</h2><br/>
  <p className="px-8 text-slate-50 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p>
  </div>
  <div className='px-8'>
  <h2 className="px-8 font-bold text-4xl text-slate-50 hover:text-pink-600 dark:text-black">Moto</h2><br/>
  <p className="px-8 text-slate-50 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p>
  </div>
  <div className='px-8'>
  <h2 className="px-8 font-bold text-4xl text-slate-50 hover:text-pink-600 dark:text-black">Moto</h2><br/>
  <p className="px-8 text-slate-50 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p>
  </div>
</div>
</div>

</div>

  )
}

export default Home