import React from "react";
import './../Instituicao/Overview.css'
import { Chart } from "react-google-charts";

export default () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Alunos", 110],
        ["Exercícios", 27],
        ["Tarefas", 8],
        ["Professores", 10], // CSS-style declaration
      ];

    return (
        <>
            <h1>Bem vindo a sua área Administrativa</h1>
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