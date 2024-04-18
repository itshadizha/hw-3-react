import "./App.css";
import CardsPartOne from "./components/cards first part/CardsPartOne";
import CardsPartTwo from "./components/cards second part/CardsPartTwo";
import Content from "./components/content/Content";
import End from "./components/end/End";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionFifth from "./components/section fifth/SectionFifth";
import SectionSeventh from "./components/section seventh/SectionSeventh";
import SectionSixth from "./components/section sixth/SectionSixth";
import SectionSecond from "./components/sectionSecond/SectionSecond";
import SectionThird from "./components/sectionThird/SectionThird";

function App() {
  return ( <div className="wrapper">
  <Header/>
  <Content/>
  <SectionSecond/>
  <SectionThird/>
  <CardsPartOne/>
  <CardsPartTwo/>
  <SectionFifth/>
  <SectionSixth/>
  <SectionSeventh/>
  <Footer/>
  <End/>
  </div>);
}

export default App;
