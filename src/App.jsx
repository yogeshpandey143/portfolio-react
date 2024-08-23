import "./App.css";
import Header from "./Components/Header/Header";
import MyExperties from "./Components/MyExperties/MyExperties";
import MyService from "./Components/MyService/MyService";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <MyService></MyService>
      <MyExperties></MyExperties>
    </>
  );
}

export default App;
