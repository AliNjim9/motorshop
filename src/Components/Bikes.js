import React from "react";
import BikeItem from "./BikeItem";
import "../Styles/Bikes.css";
import Card from "../UI/Card";

function Bikes({ bikes }) {
  return (
    <Card className="expenses">
      {
        bikes.map(
          (bike)=>{
            return <BikeItem
              modele={bike.modele}
              color={bike.color}
              puissance={bike.puissance}
              price={bike.price}
              date={bike.date}
              />
          }
        )
      }
    </Card>
  );
}

export default Bikes;
