import Homepage from "./Components/Homepage/Header"
import './App.css';
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Homepage />
      <hr/>
      <Banner />
      <Services />
    </div>
  );
}

export default App;
