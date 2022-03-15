import { Card } from "../Card";

import "./style.css";

export const Summary = () => {
  return (
    <Card className="Summary">
      <img src="./assets/illustration-hero.svg" alt="" />
      <div className="informations ">
        <h1> Order Summary</h1>
        <span>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </span>
        <div className="music-price">
          <img src="./assets/icon-music.svg" alt="" />
          <div className="prince">
            <strong>Annual Plan</strong>
            <span>$59.99/year</span>
          </div>
          <a href="#">Change</a>
        </div>
        <button>Proceed to payment</button>
        <a href="#" id="cancel-order">
          Cancel Order
        </a>
      </div>
    </Card>
  );
};
