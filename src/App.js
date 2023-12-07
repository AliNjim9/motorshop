import { useState } from "react";
import Bikes from "./Components/Bikes";
import NewExpense from "./Components/NewPurshase";

const localBikes = [
  {
    id: "b1",
    date: new Date(2023, 9, 26),
    modele: "Honda Repsol",
    color: "black",
    puissance: 1000,
    price: 6999,
  },
  {
    id: "b2",
    date: new Date(2021, 4, 13),
    modele: "XT 600",
    color: "black",
    puissance: 1000,
    price: 1500,
  },
  {
    id: "b3",
    date: new Date(2023, 1, 1),
    modele: "T-Max",
    color: "black",
    puissance: 1000,
    price: 500,
  },
  {
    id: "b4",
    date: new Date(2022, 12, 30),
    modele: "kawasaki",
    color:"black",
    puissance: 1000,
    price: 1234,
  },
];

function App() {
  const [bikes,setBikes] = useState(localBikes);
  const getData=(data)=>{

    setBikes((prevState)=> {return [data,...prevState ]});
    console.log(bikes)
  }
  return (
    <div>
    <Bikes getData={getData}/>
    <NewPurshase purshases={purshases}/>
  </div>
  );
}

export default App;
