import React from "react";
import "../Styles/BikeDate.css";
function BikeDate({ date }) {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="bike-date">
      <div className="bike-date__month">{month}</div>
      <div className="bike-date__year">{year}</div>
      <div className="bike-date__day">{day}</div>
    </div>
  );
}

export default BikeDate;
