import React from "react";

const Footer = (props) => {
  return (
    <div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div class="BuildControls__BuildControls__220uz">
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Lettuce</div>
          <button class="BuildControl__Less__3X6hg" onClick={() => props.onClick('remove','lettuce')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => props.onClick('add','lettuce')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Bacon</div>
          <button class="BuildControl__Less__3X6hg" onClick={() => props.onClick('remove','bacon')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => props.onClick('add','bacon')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Cheese</div>
          <button class="BuildControl__Less__3X6hg" onClick={() => props.onClick('remove','cheese')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => props.onClick('add','cheese')}>More</button>
        </div>
        <div class="BuildControl__BuildControl__ibcUQ">
          <div class="BuildControl__Label__2VLnR">Meat</div>
          <button class="BuildControl__Less__3X6hg" onClick={() => props.onClick('remove','meat')}>Less</button>
          <button class="BuildControl__More__2eQpV" onClick={() => props.onClick('add','meat')}>More</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
