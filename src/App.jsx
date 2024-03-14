import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data";
import BarChart from "./component/BarChart";


Chart.register(CategoryScale);
 
export default function App() {
  const [chartData, setChartData] = useState({
    Data
  });
 
  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  )
}