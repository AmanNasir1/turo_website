import './App.css';
import { FirstHeader } from "./components/firstHeader";
import { MainHeader } from "./components/mainHeader";
import { Banner } from "./components/banner";
// import  logo  from "./Assets/images/logo.svg";

function App() {
  // console.log(logo)
    return (
    <>
      <FirstHeader />
      <MainHeader />
      <Banner />
    </>
  )
}

export default App;
