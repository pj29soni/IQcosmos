import { Chart, registerables } from "chart.js";
import React, { useEffect, useState } from "react";
import "../dashboardHome.css";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
Chart.register(...registerables);
const DashboardGraphComponent = () => {
  const [pieChartData, setPieChartData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL_API}/api/iq-test-list`)
      .then((response) => response.json())
      .then((data) => setPieChartData(data));
  }, []);
  
  return (
    <>
      <div className="col col-12 col-lg-8">
        {/*------------ Start Chart ------------*/}
        <div className="box my-5">
          <div>
            <Bar
              data={{
                labels: pieChartData.map((populationData) =>
                  new Date(populationData.createdAt).toLocaleDateString()
                ),

                datasets: [
                  {
                    label: "# IQ-SCORE ",
                    data: pieChartData.map(
                      (populationData) => populationData.iqScore
                    ),
                    fill: false,
                    tension: 0.1,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                  /*   {
                            label: "Quantity",
                            data: [47, 52, 67, 58, 9, 50],
                            backgroundColor: "orange",
                            borderColor: "red",
                          }, */
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    suggestedMax: 45,
                    ticks: {
                      stepSize: 1000000,
                    },
                  },
                },
                legend: {
                  labels: {
                    fontSize: 25,
                  },
                },
              }}
            />
          </div>
        </div>
        {/*------------ End Chart ------------*/}
      </div>
    </>
  );
};

export default DashboardGraphComponent;
