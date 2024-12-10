import React, { useState } from "react";
import "./Pizza.css";

function Pizza(props) {
  const [quantity, setQuantity] = useState(0);

  // Функции для увеличения и уменьшения количества пицц
  function pAdd() {
    setQuantity(quantity + 1);
  }

  function pMinus() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  const price = props.price;

  return (
    <div className="pizza">
      <img src={props.image} alt={props.title} className="pizza-image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div className="pizza-size">
        <label htmlFor="size-select">Выберите размер:</label>
        <select id="size-select">
          <option value="small">Маленькая (30 см)</option>
          <option value="medium">Средняя (35 см)</option>
          <option value="large">Большая (40 см)</option>
        </select>
      </div>

      <p className="pizza-price">Цена: {price} ₽</p>
      <div className="pizza-controls">
        <button onClick={pMinus} disabled={quantity === 0}>
          -
        </button>
        <span className="pizzacard-quantity">{quantity}</span>
        <button onClick={pAdd}>+</button>
      </div>
      <p className="pizza-total">Итого: {quantity * price} ₽</p>
    </div>
  );
}

export default Pizza;
