
import { useEffect, useState } from "react";
import React from 'react'

function AddCardItem(props) {
  const dummyProduct = { hairOil: 10 };
  const [userItem, setUserItem] = useState(0);

  function validateStock() {
    if (userItem === 0) return;
    if (dummyProduct.hairOil <= userItem) alert("out of stock");
  }

  useEffect(() => {
    validateStock();
  }, [userItem]);

  function decrement() {
    setUserItem(userItem - 1);
  }

  function increment() {
    setUserItem(userItem + 1);
  }

  return (
    <>
    
      <section className="container my-5">
      <h1 className="text-center">Stock</h1>
        <div className="card text-center my-5">
       
          <h1 class="text-uppercase text-danger">
            {" "}
            total item in stock: {dummyProduct.hairOil}{" "}
          </h1>
          <div className="card-body">
            <h2>Quantity Selector</h2>

            <br />
            <button
              class="btn btn-warning mx-3"
              onClick={decrement}
              disabled={userItem === 0}
            >
              decrement
            </button>
            <span>{userItem}</span>
            <button
              class="btn btn-primary mx-3"
              onClick={increment}
              disabled={userItem === 10}
            >
              increment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddCardItem;
