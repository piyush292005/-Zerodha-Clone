//import React from "react";
import React,{ useState, useEffect} from "react";
import axios, {all} from "axios";

//import { positions } from "../data/data";

const Positions = () =>{
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    axios.get("https://zerodha-backend-6g46.onrender.com/allPositions").then((res) => {
      // console.log(res.data);
      setPositions(res.data);
    } ,[])

  })

const data = {
  labels: positions.map((stock) => stock["name"]),
  datasets: [
    {
      label: "P&L",
      data: positions.map((stock) => stock["pl"]),
      backgroundColor: positions.map((stock) => (stock["pl"] >= 0 ? "green" : "red")),
    }
  ]
};

return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  
);
};

export default Positions;