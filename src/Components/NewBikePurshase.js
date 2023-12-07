import React, { useState } from "react";
import NewBikePurshaseForm from "./NewBikePurshaseForm";
import "../Styles/NewBikePurshase.css";
const NewBikePurshase = ({getData}) => {
  const [isOpen,setIsOpen]= useState(false);
  const handleToggleClick = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="new-bike">
      {
        isOpen?(
          <NewBikePurshaseForm handleToggleClick={handleToggleClick} getData={getData}/>
          ):(
            <button onClick={handleToggleClick}>Add New Bike</button>
          ) 
      }
      
    </div>
  );
};

export default NewBikePurshase;
