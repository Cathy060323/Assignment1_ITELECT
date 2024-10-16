import Header from "./Header.js";
import Greetings from "./Greetings.js"
import MainContent from "./MainContent.js";
import Description from "./Videolist.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Greetings user="Alysa, Cathy, and Charina"/>
    <MainContent/>
    <Footer/>
    </>
  );
}

export default App;