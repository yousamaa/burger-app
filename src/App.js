import "./App.css";
import Navbar from "./components/Navbar";
import Burger from "./components/Burger";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const addRemoveIngredient = (action, ingredient) => {
    let stateValue;
    switch (ingredient) {
      case "lettuce": {
        stateValue = ingredients.lettuce;
        break;
      }
      case "bacon": {
        stateValue = ingredients.bacon;
        break;
      }
      case "cheese": {
        stateValue = ingredients.cheese;
        break;
      }
      case "meat": {
        stateValue = ingredients.meat;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }
    const newIngredients = {...ingredients}
    newIngredients[ingredient] = stateValue
    setIngredients(newIngredients);
  };

  return (
    <div className="App">
      <Navbar />
      <Burger ingredients={ingredients} />
      <Footer onClick={addRemoveIngredient} />
    </div>
  );
}

export default App;
