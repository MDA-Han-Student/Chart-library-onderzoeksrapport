import React from "react";
import "nivo";
import {ResponsiveLine, ResponsiveBar} from "nivo";
import {ResponsiveScatterPlot} from "@nivo/scatterplot";

const dataBar = [{
    "key": "Group 1",
    "Red": 12,
    "RedColor": "hsl(12,70%,50%)",
    "Blue": 19,
    "BlueColor": "hsl(77,10%,70%)",
    "Yellow": 3,
    "YellowColor": "hsl(77,10%,70%)",
    "Green": 5,
    "GreenColor": "hsl(77,10%,70%)",
    "Purple": 2,
    "PurpleColor": "hsl(77,10%,70%)",
    "Orange": 3,
    "OrangeColor": "hsl(77,10%,70%)"
},
    {
        "key": "Group 2",
        "Red": 10,
        "RedColor": "hsl(12,70%,50%)",
        "Blue": 15,
        "BlueColor": "hsl(77,10%,70%)",
        "Yellow": 13,
        "YellowColor": "hsl(77,10%,70%)",
        "Green": 15,
        "GreenColor": "hsl(77,10%,70%)",
        "Purple": 12,
        "PurpleColor": "hsl(77,10%,70%)",
        "Orange": 3,
        "OrangeColor": "hsl(77,10%,70%)"
    },
];

const data = [{
    id: 'Line 1',
    color: '#66d9ff',
    data: [
        { x: 'January', y: 65 },
        { x: 'February', y: 59 },
        { x: 'March', y: 80 },
        { x: 'April', y: 81 },
        { x: 'May', y: 56 },
        { x: 'June', y: 55 },
        { x: 'July', y: 40 },
    ],
},
    {
        id: 'Line 2',
        color: 'rgb(255, 99, 132)',
        data: [
            { x: 'January', y: 30 },
            { x: 'February', y: 50 },
            { x: 'March', y: 60 },
            { x: 'April', y: 70 },
            { x: 'May', y: 90 },
            { x: 'June', y: 85 },
            { x: 'July', y: 75 },
        ],
}];

const dataScatter = [{
    id: 'A sample scatter plot',
    color: 'rgba(255, 99, 132, 0.6)',
    data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
    ],
}];

const dataDot = [{
    id: 'Dot Plot',
    color: 'rgba(255, 99, 132, 0.6)',
    data: [
        { x: 'A', y: 65 },
        { x: 'B', y: 59 },
        { x: 'C', y: 80 },
        { x: 'D', y: 81 },
        { x: 'E', y: 56 },
    ],
}];


const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        theme={{
            axis: {
                ticks: {
                    text: {
                        fill: "#ffffff"
                    }
                },
                legend: {
                    text: {
                        fill: "#ffffff"
                    }
                }
            },
            grid: {
                line: {
                    stroke: "#ffffff"
                }
            }
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point',
            // format: '%Y-%m-%d',
            // precision: 'day',
            // useUTC: false
    }}
        yScale={{
            type: 'linear',
            min: '10',
            max: '100',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        // xFormat="time:%Y-%m-%d"
        axisTop={null}
        axisRight={null}
        labelTextColor={{ from: 'color', modifiers: [ [ 'lighter', 1.6 ] ] }}
        axisBottom={{
            // format: function(value){
            //     return timeFormat('%m-%d')(value);
            // },

            // tickSize: 5,
            // tickValues: 'every 2 day',
            // tickSize: 5,
            // tickPadding: 5,
            // tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            // tickColor: 'white'
            // truncateTickAt: 0
        }}
        axisLeft={{
            tickValues: [0,2,6,8,10,11],
            tickCount: 10,
            tickLength: 15,
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0,
            // tickColor: "hsl(12,70%,50%)",
            // legendColor: "hsl(77,10%,70%)"
        }}
        pointSize={10}
        // pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {

                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(200, 100, 175, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(200, 100, 175, .5)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

// const MyResponsiveRealTimeChartComponent = ({ data /* see data tab */ }) => (
//     <RealTimeChartComponent
//         data={data}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         xScale={{ type: 'point' }}
//         yScale={{
//             type: 'linear',
//             min: 'auto',
//             max: 'auto',
//             stacked: true,
//             reverse: false
//         }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         axisRight={[1,2,3,4,5,6,7,8]}
//         axisBottom={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'transportation',
//             legendOffset: 36,
//             legendPosition: 'middle',
//             truncateTickAt: 0
//         }}
//         axisLeft={{
//             tickSize: 5,
//             tickPadding: 5,
//             tickRotation: 0,
//             legend: 'count',
//             legendOffset: -40,
//             legendPosition: 'middle',
//             truncateTickAt: 0
//         }}
//         pointSize={10}
//         pointColor={{ theme: 'background' }}
//         pointBorderWidth={2}
//         pointBorderColor={{ from: 'serieColor' }}
//         pointLabelYOffset={-12}
//         enableTouchCrosshair={true}
//         useMesh={true}
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 100,
//                 translateY: 0,
//                 itemsSpacing: 0,
//                 itemDirection: 'left-to-right',
//                 itemWidth: 80,
//                 itemHeight: 20,
//                 itemOpacity: 0.75,
//                 symbolSize: 12,
//                 symbolShape: 'circle',
//                 symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
// )
//
const MyResponsiveScatterPlot = ({ data /* see data tab */ }) => (
    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
)

const MyResponsiveDotPlot = ({ data /* see data tab */ }) => (
    <ResponsiveScatterPlot
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        tooltip={({ node }) => {
            return node.x + " : " + node.y;
            // return (
            //     <div
            //         style={{
            //             color: "white",
            //             background: "black",
            //             padding: "12px",
            //         }}
            //     >
            //         <strong>{node.data.xFormatted}</strong>
            //         <br />
            //         {node.data.yFormatted}
            //     </div>
            // );
        }}
    />
)

const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        keys={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
        indexBy="key"
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        groupMode="grouped"
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const style = {
    display: "flex",
    justifyContent: "center",
    width: "45%",
    margin: "auto",
    background: '#4d4d4d',
    borderRadius: "40px",
    border: "2px solid white",
    marginBottom: "2vh",
    height: "25vh",
}

const Nivo = () => {
    console.log("Nivo");
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            //     <div style={{
                    width: "100%",
                }} >
            <div style={style}>
                <MyResponsiveLine data={data}/>
            </div>
            <div style={style}>
                <MyResponsiveScatterPlot data={dataScatter}/>
            </div>
                <div style={style}>
                <MyResponsiveDotPlot data={dataDot}/>
            </div>
            <div style={style}>
                <MyResponsiveBar data={dataBar}/>
            </div>
        </div>
        </div>
    )
}

export default Nivo;