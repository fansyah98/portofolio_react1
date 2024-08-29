import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from  "./Components/Hero/Hero";


const App = () => {

  let heroData = [
    {text1:"Honda Cirebon",text2:"Dealer Terbaik Di Cirebon"},
    {text1:"Harga Terjangkau",text2:"Banyak Promo"},
    {text1:"Ada Yang bisa kami bantu",text2:"Pilih Warna Banyak"},

  ]

  const[heroCount, setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar></Navbar>
       <Hero
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}

       />
    </div>
  )
}

export default App
