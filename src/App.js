import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"

import "./App.css"

function App() {
  const [chartData, setChartData] = useState({})

  let rep1 = 500
  let rep2 = 435
  let rep3 = 420
  let rep4 = 415
  let rep5 = 410

  const createSet = (start, decay) => {
    console.log(test)
  }

  const chart = () => {
    setChartData({
      labels: [1, 10, 100, 1000, 100000, 1000000],
      datasets: [
        {
          label: "Without Repetition",
          backgroundColor: "rgba(231, 76, 60, 0.75)",
          data: [rep1, rep2, rep3, rep4, rep5],
        },
        {
          label: "Repetition 1",
          backgroundColor: "rgba(52, 152, 219, 0.75)",
          data: [, 500, 435, 420, 415, 412],
        },
        {
          label: "Repetition 2",
          backgroundColor: "rgba(52, 152, 219, 0.75)",
          data: [, , 500, 442, 425, 422, 420],
        },
        {
          label: "Repetition 3",
          backgroundColor: "rgba(52, 152, 219, 0.75)",
          data: [, , , 500, 445, 427, 425, 422],
        },
        {
          label: "Repetition 4",
          backgroundColor: "rgba(52, 152, 219, 0.75)",
          data: [, , , , 500, 445, 427, 425, 422],
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
          /*  tooltips: false,   needed for development */

          title: {
            display: true,
            text: "Chart.js Toggle with React",
            fontSize: 20,
          },
          scales: {
            x: [
              {
                type: "logarithmic",
                display: true,
                ticks: {
                  min: 0,
                  max: 1000000,
                  callback: function (value, index, values) {
                    if (value === 100000) return "100K"
                    if (value === 10000) return "10K"
                    if (value === 1000) return "1K"
                    if (value === 100) return "100"
                    if (value === 10) return "10"
                    if (value === 0) return "0"
                    return null
                  },
                },
              },
            ],
            y: [
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
