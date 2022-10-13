import React from "react";

const Burger = (props) => {
  const burgerContent = () => {
    let burger = [];

    // outputting the lettuce
    for (let i = 0; i < props.ingredients['lettuce']; i++) {
      burger.push(<div key={burger.length} className="BurgerIngredient__Lettuce__zoLnB"></div>);
    }
    // outputting the tomato
    for (let i = 0; i < props.ingredients['bacon']; i++) {
      burger.push(<div key={burger.length} className="BurgerIngredient__Bacon__2RZZH"></div>);
    }
    // outputting the cheese
    for (let i = 0; i < props.ingredients['cheese']; i++) {
      burger.push(<div key={burger.length} className="BurgerIngredient__Cheese__1eqwP"></div>);
    }
    // outputting the meat
    for (let i = 0; i < props.ingredients['meat']; i++) {
      burger.push(<div key={burger.length} className="BurgerIngredient__Meat__1LdrR"></div>);
    }
    if (burger.length === 0)
      burger.push(<p key="0">No Ingredients Added</p>);
    return burger;
  };
  return (
    <div>
      <div class="Burger__Burger__2h2kL">
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div class="BurgerIngredient__BreadTop__2Pkwe">
          <div class="BurgerIngredient__Seeds1__2k2x7"></div>
          <div class="BurgerIngredient__Seeds2__9Mret"></div>
        </div>
        {burgerContent()}
        <div class="BurgerIngredient__BreadBottom__2z9NQ"></div>
      </div>
    </div>
  );
};

export default Burger;
