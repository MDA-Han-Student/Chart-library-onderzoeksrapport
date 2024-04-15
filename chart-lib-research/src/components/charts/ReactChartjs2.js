import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Example Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#66d9ff',
        }
    ]
};

const options = {
    scales: {
        x: {
            ticks: {
                beginAtZero: true,
                color: 'white'
            }
        },
        y: {
            ticks: {
                beginAtZero: true,
                color: 'white'
            }
        },
    },
    plugins: {
        legend: {
            labels: {
                display: true,
                color: 'white',
            }
        }
    },
    layout: {
       padding: {
           top: 10,
           bottom: 10,
           right: 30,
           left: 30,
       }
    },
    responsive: true,
    maintainAspectRatio: false,
};

const style = {
    display: "flex",
    justifyContent: "center",
    width: "90%",
    margin: "auto",
    background: '#4d4d4d',
    borderRadius: "40px",
    border: "2px solid white",
    marginBottom: "2vh",
}

const ReactChartjs2 = () => {
    console.log("react-chartjs-2");
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                width: "100%",
            }}>
                <div style={style}>
                    <Line data={data} options={options} />
                </div>
                <div style={style}>

                </div>
            </div>
            <div style={{
                width: "100%",
            }}>
                <div style={style}>

                </div>
                <div style={style}>

                </div>
            </div>
        </div>
    );
}

export default ReactChartjs2;