import React, { useState } from "react";
import "../Styles/NewBikePurshaseForm.css";

const NewBikePurshaseForm = ({getData,handleToggleClick}) => {

  const [data,setData] = useState({
    modele:"",
    color:"",
    puissance:"",
    price:"",
    date:""
  })
  function modeleChangeHandler(event) {
    setData((prevState)=>{
      return{
      ...prevState,modele:event.target.value
    }
    });
  }
  function colorChangeHandler(event) {
    setData((prevState)=>{
      return{
      ...prevState,color:event.target.value
    }
    });
  }
  function puissanceChangeHandler(event) {
    setData((prevState)=>{
      return{
      ...prevState,puissance:event.target.value
    }
    });
  }
  function priceChangeHandler(event) {
    setData((prevState)=>{
      return{
      ...prevState,price:event.target.value
    }
    });
  }
  function dateChangeHandler(event) {
    setData((prevState)=>{
      return{
      ...prevState,date:event.target.value
    }
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const bikeData = {
      title: data.title,
      price: data.price,
      date: new Date(data.date),
    };
    getData(bikeData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-bike__controls">
        <div className="new-bike__control">
          <label>Modele</label>
          <input type="text" 
            onChange={modeleChangeHandler} 
            value={data.modele} 
          />
        </div>
        <div className="new-bike__control">
          <label>Color</label>
          <input type="text" 
            onChange={colorChangeHandler} 
            value={data.color} 
          />
        </div>
        <div className="new-bike__control">
          <label>Puissance</label>
          <input type="text" 
            onChange={puissanceChangeHandler} 
            value={data.puissance} 
          />
        </div>
        <div className="new-bike__control">
          <label>Price</label>
          <input
            type="number"
            min="0"
            step="0.001"
            onChange={priceChangeHandler}
            value={data.price}
          />
        </div>
        <div className="new-bike__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={data.date}
          />
        </div>
      </div>
      <div className="new-bike__actions">
        <button onClick={handleToggleClick}>Cancel</button>
        <button type="submit"> Bike </button>
      </div>
    </form>
  );
};

export default NewBikePurshaseForm;
