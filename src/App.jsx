import './App.css';
import { FirstHeader } from "./components/firstHeader";
import { MainHeader } from "./components/mainHeader";
import { Banner } from "./components/banner";
import { Slider } from "./components/slider1";
import { Slider2 } from "./components/slider2";

function App() {

  let carArr = [
    'images/car1.jpg',
    'images/car2.jpg',
    'images/car3.jpg',
    'images/car4.jpg',
    'images/car5.jpg',
    'images/car6.jpg',
    'images/car7.jpg',
    'images/car8.jpg',
    'images/car9.jpg',
    'images/car10.jpg',
  ]

  let cityData = [
    'images/city-1.png',
    'images/city-2.png',
    'images/city-3.png',
    'images/city-4.png',
    'images/city-5.png',
    'images/city-6.png',
    'images/city-2.png',
    'images/city-5.png',
    'images/city-3.png',
    'images/city-6.png',
  ]

  return (
    <>
      <FirstHeader />
      <MainHeader />
      <Banner />
      <Slider dataArr={carArr} showHeading carPics />
      <Slider2 />
      <Slider dataArr={cityData} showHeading={false} />


    </>
  )
}

export default App;
