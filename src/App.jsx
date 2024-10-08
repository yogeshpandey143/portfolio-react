import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MyExperties from "./Components/MyExperties/MyExperties";
import MyProjects from "./Components/MyProjects/MyProjects";
import MyService from "./Components/MyService/MyService";
import NavBar from "./Components/NavBar/NavBar";
import Scroll from "./Components/Scroller/Scroll";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <MyService></MyService>
      <MyExperties></MyExperties>
      <MyProjects></MyProjects>
      <Footer></Footer>
      <Scroll></Scroll>
    </>
  );
}

export default App;
