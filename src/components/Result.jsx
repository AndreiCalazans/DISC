import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

function Result() {
  const { w, x, y, z } = useSelector((state) => state.results);
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["(D)", "(I)", "(S)", "(C)"],
        datasets: [
          {
            data: [w, x, y, z],
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          r: {
            reverse: false,
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [w, x, y, z]);

  const calculateDisc = () => {
    const disc = { d: w, i: x, s: y, c: z };
    const arrayOfDisc = [];
    for (const letter in disc) {
      arrayOfDisc.push([letter, disc[letter]]);
    }
    let answer = "";
    arrayOfDisc
      .filter((each) => each[1] > 36)
      .sort((a, b) => {
        if (a[1] < b[1]) return +1;
        if (a[1] > b[1]) return -1;
        return 0;
      })
      .forEach((e) => {
        answer = answer.concat(e[0]);
      });

    const upperCaseAnswer = answer.toUpperCase();

    return (
      <h1>
        Você é um <span style={{ color: "red" }}> {upperCaseAnswer}</span>
      </h1>
    );
  };

  return (
    <div className="result centered column">
      {calculateDisc()}
      <table>
        <tbody>
          <tr>
            <td>D = {w}</td>
            <td>I = {x}</td>
            <td>S = {y}</td>
            <td>C = {z}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <canvas ref={canvasRef} id="myChart" width="400" height="400" />
      </div>
      <div>
        <Link to="/disc">Aprenda sobre os diferentes comportamentos</Link>
      </div>
    </div>
  );
}

export default Result;
