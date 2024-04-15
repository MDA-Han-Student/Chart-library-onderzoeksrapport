import React from "react";
import { Line, Bar, Scatter } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip } from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Line 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#66d9ff',
        },
        {
            label: 'Line 2',
            data: [30, 50, 60, 70, 90, 85, 75],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
        },
    ]
};

const dataBar = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        },
    ],
}

const dataScatter = {
    datasets: [
        {
            label: 'A sample scatter plot',
            data: [
                { x: 65, y: 75 },
                { x: 59, y: 49 },
                { x: 80, y: 90 },
                { x: 81, y: 29 },
                { x: 56, y: 36 },
                { x: 55, y: 25 },
                { x: 40, y: 18 },
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const dataDot = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
        {
            label: 'Dot Plot',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

const standardOptions = {
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: '#333',
            titleColor: 'white',
            bodyColor: 'white',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
        },
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
}

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
    ...standardOptions,
};

const optionsBar = {
    scales: {
        x: {
            ticks: {
                color: 'white',
            }
        },
        y: {
            ticks: {
                color: 'white',
                beginAtZero: true
            }
        }
    },
    ...standardOptions,
}


const optionsScatter = {
    scales: {
        x: {
            type: 'linear',
            position: 'bottom',
            ticks: {
                color: 'white',
            }
        },
        y: {
            type: 'linear',
            position: 'left',
            ticks: {
                color: 'white',
            }
        }
    },
    ...standardOptions,
};

const optionsDot = {
    scales: {
        x: {
            ticks: {
                color: 'white',
            }
        },
        y: {
            ticks: {
                color: 'white',
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        }
    },
    layout: standardOptions.layout,
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
                    <Bar data={dataBar} options={optionsBar} />
                </div>
            </div>
            <div style={{
                width: "100%",
            }}>
                <div style={style}>
                    <Scatter data={dataScatter} options={optionsScatter} />
                </div>
                <div style={style}>
                    <Scatter data={dataDot} options={optionsDot} />
                </div>
            </div>
        </div>
    );
}

export default ReactChartjs2;