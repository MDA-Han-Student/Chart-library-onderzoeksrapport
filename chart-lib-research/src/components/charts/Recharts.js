import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ScatterChart,
    Scatter,
    BarChart,
    Bar,
    Legend
} from 'recharts';

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 900},
    {name: 'Page B', uv: 450, pv: 2200, amt: 1200},
    {name: 'Page C', uv: 500, pv: 2250, amt: 1130},
    {name: 'Page D', uv: 525, pv: 1900, amt: 850},
    {name: 'Page E', uv: 585, pv: 1770, amt: 1050},
    {name: 'Page F', uv: 635, pv: 2300, amt: 1250},
];

const Recharts = () => {
    console.log("Recharts");
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                width: "100%",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    border: "2px solid white",
                    marginBottom: "2vh",
                }}>
                    <LineChart width={600} height={200} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#66d9ff" />
                        <Line type="monotone" dataKey="pv" stroke="rgb(255, 99, 132)" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="amt" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }}/>
                        <Legend />
                    </LineChart>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    border: "2px solid white",
                }}>
                        <ScatterChart width={600} height={200}>
                            <CartesianGrid stroke="#ccc" />
                            <XAxis type="number" dataKey="pv" name="RPM" unit="rpm" stroke="white"/>
                            <YAxis type="number" dataKey="uv" name="Pressure" unit="J" stroke="white"/>
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="A school" data={data} fill="#66d9ff" />
                        </ScatterChart>
                </div>
            </div>
            <div style={{
                width: "100%",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    border: "2px solid white",
                    marginBottom: "2vh"
                }}>
                    <BarChart width={600} height={200} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="white"/>
                        <YAxis dataKey="pv" stroke="white"/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#66d9ff" />
                        <Bar dataKey="uv" fill="rgb(255, 99, 132)" />
                    </BarChart>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    border: "2px solid white",
                }}>
                    <ScatterChart width={600} height={200}>
                        <CartesianGrid />
                        <XAxis dataKey="name" type="category" stroke="white" />
                        <YAxis dataKey="pv" type="number" stroke="white" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A Scatter" data={data} fill="#66d9ff" />
                    </ScatterChart>
                </div>
            </div>
        </div>
    );
}

export default Recharts;