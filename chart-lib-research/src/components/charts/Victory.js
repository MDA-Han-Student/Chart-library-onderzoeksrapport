import React from "react";
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryAxis, VictoryHistogram, VictoryLine } from 'victory';

const CHART_WIDTH = 600;
const CHART_HEIGHT = 200;
const CHART_LABEL_COLOR = 'white';
const CHART_ITEM_COLOR = '#66d9ff';

const Victory = () => {
    console.log("Victory");
    const data = [
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 5 },
        { x: 4, y: 4 },
        { x: 5, y: 7 }
    ];

    const data2 = [
        { y: 1 },
        { y: 2 },
        { y: 3 },
        { y: 4 },
        { y: 5 },
        { y: 6 },
        { y: 7 },
        { y: 8 },
        { y: 9 },
        { y: 10 }
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div style={{
                width: "100%",
            }}>
                <div style={{
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    marginBottom: "2vh"
                }}>
                    <VictoryChart
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <VictoryAxis
                            label="Engine temp in C"
                            style={{
                                axisLabel: {padding: 30, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            label="RPM"
                            style={{
                                axisLabel: {padding: 37, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryHistogram
                            style={{data: {fill: CHART_ITEM_COLOR}}}
                            data={[
                                {x0: 0, x: 10, y: 5},
                                {x0: 10, x: 20, y: 8},
                                {x0: 20, x: 30, y: 15},
                            ]}
                            bins={10}
                            binSpacing={20}
                        />
                    </VictoryChart>
                </div>
                <div style={{width: "90%", margin: "auto", background: '#4d4d4d', borderRadius: "40px"}}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domain={{x: [0, 100], y: [0, 8000]}}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <VictoryAxis
                            label="Engine temp in C"
                            style={{
                                axisLabel: {padding: 30, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            label="RPM"
                            style={{
                                axisLabel: {padding: 37, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryScatter
                            style={{
                                data: {fill: CHART_ITEM_COLOR},
                            }}
                            size={4}
                            animate={{
                                duration: 2000,
                                onLoad: {duration: 1000}
                            }}
                            data={[
                                {x: 43, y: 3000},
                                {x: 59, y: 4500},
                                {x: 67, y: 5000},
                                {x: 74, y: 6000},
                                {x: 89, y: 7500}
                            ]}
                        />
                    </VictoryChart>
                </div>
            </div>
            <div style={{
                width: "100%",
            }}>
                <div style={{
                    width: "90%",
                    margin: "auto",
                    background: '#4d4d4d',
                    borderRadius: "40px",
                    marginBottom: "2vh"
                }}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <VictoryAxis
                            label="Engine temp in C"
                            style={{
                                axisLabel: {padding: 30, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            label="RPM"
                            style={{
                                axisLabel: {padding: 37, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryLine
                            data={data}
                            style={{
                                data: { stroke: CHART_ITEM_COLOR }
                            }}
                        />
                    </VictoryChart>
                </div>
                <div style={{width: "90%", margin: "auto", background: '#4d4d4d', borderRadius: "40px"}}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                    >
                        <VictoryAxis
                            dependentAxis
                            label="Values"
                            style={{
                                axisLabel: {padding: 37, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
                        <VictoryScatter
                            data={data}
                            size={5} // Adjust the size of the dots
                            style={{
                                data: { fill: CHART_ITEM_COLOR } // Adjust the color of the dots
                            }}
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
    );
};

export default Victory;
