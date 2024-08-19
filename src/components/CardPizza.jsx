import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { formatNumber } from "../scripts";
import {pizzas} from "../pizzas";

export const CardPizza = ({ pizza }) => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-center fs-6">
            <Card.Text>{pizza.desc}</Card.Text>
            <hr />
            <Card.Text>Ingredientes</Card.Text>
          </div>
          <ul className="list-group list-group-flush">
            {pizza.ingredients.map((ingredients, index) => (
              <li
                key={index}
                className="list-group-item text-center pizza-ingredient"
              >
                {ingredients}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-center">
            <strong>Precio: ${formatNumber(pizza.price)}</strong>
          </div>
          <div className="d-flex justify-content-between p-3">
            <Button className="border" variant="light">
              Ver más 👀
            </Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
