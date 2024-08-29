import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from  "./Components/Hero/Hero";


const App = () => {

  let heroData = [
    {text1:"Honda Cirebon",text2:"What"},
    {text1:"Dealer Terbaik Di Kota Cirebon",text2:"Dealer"},
    {text1:"Ada Yang bisa kami bantu",text2:"Pilih Warna Banyak"},

  ]

  const[heroCount, setHeroCount] = useState(2);
  const[playStatus,setPlayStatus] = useState(true);


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar></Navbar>
       <Hero>
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}

       </Hero>
    </div>
  )
}

export default App
