import "../Styles/BikeDate.css";
import BikeDate from "./BikeDate";
import Card from "../UI/Card";

const BikeItem = ({ modele, color , puissance ,price, date }) => {

  return (
    <Card className="bike-item">
      <div>
        <BikeDate date={date} />
      </div>
      <div className="bike-item__description">
        <h2>{modele}</h2>
        <h2>{color}</h2>
        <h2>{puissance}</h2>
        <div className="bike-item__price">$ {price}</div>
      </div>
    </Card>
  );
};

export default BikeItem;
