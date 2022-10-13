import React from "react";
import burgerLogo from "./../assets/burger-logo.png";

const Navbar = () => {
  return (
    <div>
      <header class="Toolbar__Toolbar__2hkfg">
        <div class="Toolbar__Logo__24rue">
          <div class="Logo__Logo__2A07e">
            <img src={burgerLogo} alt="myBurger" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
