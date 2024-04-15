import React from "react";

import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';

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

const data = [
    { date: new Date(2024, 0, 1), value: 9 },
    { date: new Date(2024, 1, 1), value: 18 },
    { date: new Date(2024, 2, 1), value: 21 },
    { date: new Date(2024, 3, 1), value: 26 },
];

const width = 600;
const height = 200;
const margin = { top: 20, right: 20, bottom: 50, left: 50 };

const xScale = scaleTime({
    domain: [new Date(2024, 0, 1), new Date(2024, 3, 1)],
    range: [margin.left, width - margin.right],
});

const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.value))],
    range: [height - margin.bottom, margin.top],
});

const Visx = () => {
    console.log("Visx");
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                width: "100%",
            }}>
                <div style={style}>
                    <svg width={width} height={height}>
                        <Group>
                            <LinePath
                                data={data}
                                x={d => xScale(d.date)}
                                y={d => yScale(d.value)}
                                stroke="#FF5733"
                            />
                        </Group>
                        <AxisBottom
                            scale={xScale}
                            top={height - margin.bottom}
                            label="Date"
                            numTicks={4}
                            stroke={'white'}
                            tickLabelProps={() => ({
                                fill: 'white',
                                fontSize: '10px',
                            })}
                            tickLineProps={() => ({
                                fill: 'white'
                            })}
                            labelProps={() => ({
                                fill: 'white'
                            })}
                        />
                        <AxisLeft
                            scale={yScale}
                            left={margin.left}
                            label="Value"
                            numTicks={5}
                            stroke={'white'}
                            tickLabelProps={() => ({
                                fill: 'white',
                                fontSize: '10px',
                            })}
                            tickLineProps={() => ({
                                fill: 'white'
                            })}
                        />
                    </svg>
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

export default Visx;