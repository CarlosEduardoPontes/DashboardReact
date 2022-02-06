import React from "react";

import { Chart } from "react-google-charts";

export default () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];

    return (
        <>
            <p>Bem vindo a sua área Administrativa</p>
            <div className='area-grafico'>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                />
            </div>
        </>
    );
}