import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from "../pizzas";

function Home() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {pizzas.map((e) => (
          <CardPizza
            key={e.id}
            img={e.img}
            name={e.name}
            desc={e.desc}
            price={e.price}
            ingredients={e.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;