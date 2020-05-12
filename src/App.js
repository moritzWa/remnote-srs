import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

import "./App.css"

function App() {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(52, 152, 219, 0.75)",
          data: [5, 10, 15, 30, 50],
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(231, 76, 60, 0.75)",
          data: [300, 500, 100, 40, 120],
        },
      ],
    })
  }

  useEffect(() => {
    chart()
  }, [])

  console.log(chartData)

  return (
    <div className="App">
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Chart.js Toggle with React",
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                type: "linear",
                display: true,
                position: "left",
              },
            ],
          },
        }}
      />
    </div>
  )
}

export default App
