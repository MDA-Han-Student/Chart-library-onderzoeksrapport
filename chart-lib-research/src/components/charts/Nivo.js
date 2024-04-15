import React from "react";
import "nivo";
import {ResponsiveLine} from "nivo";
import {ResponsiveScatterPlot} from "@nivo/scatterplot";

const data = [
    {
        id: 'Oil Temp',
        "color": "hsl(32, 70%, 50%)",
        data: [
        {
        x: '2021-01-01',
        y: 0,
        },
        {
        x: '2021-01-02',
        y: 1,
        },
        {
        x: '2021-01-03',
        y: 2,
        },
        ]
    },
    {
        id: 'Oil Pressure',
        "color": "hsl(159,70%,50%)",
        data: [
        {
        x: '2021-01-01',
        y: 1,
        },
        {
        x: '2021-01-02',
        y: 2,
        },
        {
        x: '2021-01-03',
        y: 3,
        },
        ]
    }
];


const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
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
// const MyResponsiveScatterPlot = ({ data /* see data tab */ }) => (
//     <ResponsiveScatterPlot
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
//         axisRight={null}
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
// const MyResponsiveDotPlot = ({ data /* see data tab */ }) => (
//     <ResponsiveScatterPlot
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
//         axisRight={null}
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

const Nivo = () => {
    console.log("Nivo");
    return (
        <>
        <MyResponsiveLine data={data} />
        {/*<MyResponsiveScatterPlot data={data} />*/}
        {/*<MyResponsiveDotPlot data={data} />*/}
        {/*<MyResponsiveRealTimeChartComponent data={data} />*/}
        </>
    )
}

export default Nivo;