import React from "react";
import {
    VictoryChart,
    VictoryScatter,
    VictoryTheme,
    VictoryAxis,
    VictoryHistogram,
    VictoryLine,
    VictoryZoomContainer,
    VictoryBrushLine,
    VictoryTooltip,
} from 'victory';

const CHART_WIDTH = 600;
const CHART_HEIGHT = 200;
const CHART_LABEL_COLOR = 'white';
const CHART_ITEM_COLOR = '#66d9ff';
const ANIMATION_TIME = 200;

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
        { x: 1, y: 3 },
        { x: 2, y: 4 },
        { x: 3, y: 6 },
        { x: 4, y: 5 },
        { x: 5, y: 8 }
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
                    border: "2px solid white",
                    marginBottom: "2vh"
                }}>
                    <VictoryChart
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                        containerComponent={<VictoryZoomContainer />}
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
                            labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                            labelComponent={
                                <VictoryTooltip
                                    center={{ x: CHART_WIDTH/2, y: 20 }}
                                    pointerOrientation="bottom"
                                    flyoutWidth={0}
                                    flyoutHeight={0}
                                    pointerWidth={0}
                                    cornerRadius={0}
                                />
                            }
                        />
                    </VictoryChart>
                </div>
                <div style={{width: "90%", margin: "auto", background: '#4d4d4d', borderRadius: "40px", border: "2px solid white",}}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        domain={{x: [0, 100], y: [0, 8000]}}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                        containerComponent={<VictoryZoomContainer />}
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
                            data={[
                                {x: 43, y: 3000},
                                {x: 59, y: 4500},
                                {x: 67, y: 5000},
                                {x: 74, y: 6000},
                                {x: 89, y: 7500}
                            ]}
                            labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                            labelComponent={
                                <VictoryTooltip
                                    center={{ x: CHART_WIDTH/2, y: 20 }}
                                    pointerOrientation="bottom"
                                    flyoutWidth={0}
                                    flyoutHeight={0}
                                    pointerWidth={0}
                                    cornerRadius={0}
                                />
                            }
                            gridComponent={<VictoryBrushLine width={30}/>}
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
                    border: "2px solid white",
                    marginBottom: "2vh"
                }}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                        containerComponent={<VictoryZoomContainer />}
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
                        <VictoryScatter
                            data={data}
                            size={3}
                            style={{
                                data: { fill: CHART_ITEM_COLOR }
                            }}
                            labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                            labelComponent={<VictoryTooltip
                                center={{ x: CHART_WIDTH/2, y: 20 }}
                                pointerOrientation="bottom"
                                flyoutWidth={0}
                                flyoutHeight={0}
                                pointerWidth={0}
                                cornerRadius={0}
                            />}
                        />
                        <VictoryLine
                            data={data2}
                            style={{
                                data: { stroke: "rgb(255, 99, 132)" }
                            }}
                        />
                        <VictoryScatter
                            data={data2}
                            size={3}
                            style={{
                                data: { fill: "rgb(255, 99, 132)" }
                            }}
                            labels={({ datum }) => `x: ${datum.x}, y: ${datum.y}`}
                            labelComponent={<VictoryTooltip
                                center={{ x: CHART_WIDTH/2, y: 20 }}
                                pointerOrientation="bottom"
                                flyoutWidth={0}
                                flyoutHeight={0}
                                pointerWidth={0}
                                cornerRadius={0}
                            />}
                        />
                    </VictoryChart>
                </div>
                <div style={{width: "90%", margin: "auto", background: '#4d4d4d', borderRadius: "40px", border: "2px solid white", }}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        width={CHART_WIDTH}
                        height={CHART_HEIGHT}
                        containerComponent={<VictoryZoomContainer />}
                    >
                        <VictoryAxis
                            style={{
                                axisLabel: {padding: 30, fill: CHART_LABEL_COLOR},
                                tickLabels: {fill: CHART_LABEL_COLOR, fontSize: 10},
                            }}
                        />
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
                            size={5}
                            style={{
                                data: { fill: CHART_ITEM_COLOR }
                            }}
                        />
                        <VictoryScatter
                            data={data2}
                            size={5}
                            style={{
                                data: { fill: 'rgb(255, 99, 132)' }
                            }}
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
    );
};

export default Victory;
