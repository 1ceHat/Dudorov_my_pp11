import './App.css';
import Pizza from "./components/Pizza.js";
import "./components/Pizza.css";
import image from "./images/Жюльен.avif"


function App() {
  return (
    <div>
      <Pizza
        title = "Жульен"
        description = "Дичь с грибами. Косит под француза 😁"
        image = {image} altText="Julien"
        price="550"
      />
    </div>
  );
}

export default App;
