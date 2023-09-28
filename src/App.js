import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./Components/Navbar";
import JammuKashmirMap from "./Components/JammuKashmirMap";
import Home from "./Components/Home";
import District from "./Components/District";
import Products from "./Components/Products";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function App() {
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *","jammu"],
      callback: (redirectPage) => setRedirectUrl(redirectPage.toLowerCase()) // Convert to lowercase
    }
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "products", "map","jammu","anantanag","baramulla","samba","kathua","udhampur","kupwara","pulwama","doda","kishtwar","rajouri","poonch","ramban","budagam","bandipora","ganderbal","reasi","kulgam","shopian"];
  const urls = {
    jammu:"jammu",
    anantanag:"anantanag",
    baramulla:"baramulla",
    samba:"samba",
    kathua:"kathua",
    udhampur:"udhampur",
    kupwara:"kupwara",
    pulwama:"pulwama",
    doda:"doda",
    kishtwar:"kishtwar",
    rajouri:"rajouri",
    poonch:"poonch",
    ramban:"ramban",
    budagam:"budagam",
    bandipora:"bandipora",
    ganderbal:"ganderbal",
    reasi:"reasi",
    kulgam:"reasi",
    shopian:"shopian",
    home: "/home",
    "products": "/products", // Use consistent case
    "map": "/map",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = null;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
      
    }
  }

  return (
    <Router>
      <button  onClick={SpeechRecognition.startListening}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg></button>
      
      <NavBar />
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/map" element={<JammuKashmirMap />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/District" element={<District />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/loc" element={<Translate />} /> */}
        <Route path="jammu" element={<District state="Jammu" />}/>
        <Route path="anantanag" element={<District state="Anantanag" />}/>
        <Route path="baramulla" element={<District state="Baramulla" />}/>
        <Route path="samba" element={<District state="Samba" />}/>
        {/* <Route path="Jammu" element={<District state="Samba" />}/> */}
        <Route path="kathua" element={<District state="Kathua" />}/>
        <Route path="udhampur" element={<District state="Udhampur" />}/>
        <Route path="kupwara" element={<District state="Kupwara" />}/>
        <Route path="pulwama" element={<District state="Pulwama" />}/>
        <Route path="doda" element={<District state="Doda" />}/>
        <Route path="kishtwar" element={<District state="Kishtwar" />}/>
        <Route path="rajouri" element={<District state="Rajouri" />}/>
        <Route path="poonch" element={<District state="Poonch" />}/>
        <Route path="ramban" element={<District state="Ramban" />}/>
        <Route path="budagam" element={<District state="Budagam" />}/>
        <Route path="bandipora" element={<District state="Bandipora" />}/>
        <Route path="ganderbal" element={<District state="Ganderbal" />}/>
        <Route path="reasi" element={<District state="Reasi" />}/>
        <Route path="kulgam" element={<District state="Kulgam" />}/>
        <Route path="shopian" element={<District state="Shopian" />}/>
        
      </Routes>
      {redirect}
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </Router>
  );
}
