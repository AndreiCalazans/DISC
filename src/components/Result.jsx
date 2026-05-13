import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

const DISC_COLORS = {
  D: "#ef4444",
  I: "#f59e0b",
  S: "#10b981",
  C: "#3b82f6",
};

function computeDisc({ w, x, y, z }) {
  const map = { D: w, I: x, S: y, C: z };
  return Object.entries(map)
    .filter(([, v]) => v > 36)
    .sort((a, b) => b[1] - a[1])
    .map(([k]) => k)
    .join("");
}

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
        labels: ["D", "I", "S", "C"],
        datasets: [
          {
            label: "Você",
            data: [w, x, y, z],
            backgroundColor: "rgba(99, 102, 241, 0.18)",
            borderColor: "#6366f1",
            borderWidth: 2,
            pointBackgroundColor: [
              DISC_COLORS.D,
              DISC_COLORS.I,
              DISC_COLORS.S,
              DISC_COLORS.C,
            ],
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(15, 23, 42, 0.92)",
            padding: 10,
            displayColors: false,
            titleFont: { family: "Plus Jakarta Sans", weight: "700" },
            bodyFont: { family: "Plus Jakarta Sans" },
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            grid: { color: "rgba(15, 23, 42, 0.08)" },
            angleLines: { color: "rgba(15, 23, 42, 0.08)" },
            pointLabels: {
              font: {
                family: "Bricolage Grotesque",
                size: 18,
                weight: "700",
              },
              color: "#0f172a",
            },
            ticks: {
              backdropColor: "transparent",
              color: "#94a3b8",
              font: { family: "Plus Jakarta Sans", size: 11 },
            },
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [w, x, y, z]);

  const upperCaseAnswer = computeDisc({ w, x, y, z }).toUpperCase();
  const stats = [
    { letter: "D", value: w },
    { letter: "I", value: x },
    { letter: "S", value: y },
    { letter: "C", value: z },
  ];

  return (
    <section className="result">
      <div className="result-hero">
        <p className="result-hero__eyebrow">Seu perfil</p>
        <h1 className="result-hero__title">
          Você é um{" "}
          <span className="result-hero__type">
            {upperCaseAnswer || "—"}
          </span>
        </h1>
      </div>

      <div className="result-stats" role="list" aria-label="Pontuação por dimensão">
        {stats.map((s) => (
          <div className="stat" data-letter={s.letter} role="listitem" key={s.letter}>
            <div className="stat__label">{s.letter}</div>
            <div className="stat__value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="result-chart">
        <h2 className="result-chart__title">Visão geral</h2>
        <canvas
          ref={canvasRef}
          className="result-chart__canvas"
          width="480"
          height="480"
          aria-label="Gráfico radar com pontuação D, I, S, C"
        />
      </div>

      <div className="result-actions">
        <Link to="/disc" className="btn btn--primary">
          Aprenda sobre os comportamentos
        </Link>
        <Link to="/" className="btn btn--ghost">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}

export default Result;
