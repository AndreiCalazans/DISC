import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";

const DISC_COLORS = {
  D: "#ef4444",
  I: "#f59e0b",
  S: "#10b981",
  C: "#3b82f6",
};

const THRESHOLD = 36; // a letter contributes to the type when score > 36
const AXIS_MAX = 60; // each letter has 15 questions x max value 4 = 60

const CHART_TYPES = [
  { id: "radar", label: "Radar" },
  { id: "bar", label: "Barras" },
  { id: "line", label: "Linha" },
];

const FONT = "Plus Jakarta Sans";
const DISPLAY_FONT = "Bricolage Grotesque";
const THRESHOLD_COLOR = "rgba(239, 68, 68, 0.85)";

function computeDisc({ w, x, y, z }) {
  const map = { D: w, I: x, S: y, C: z };
  return Object.entries(map)
    .filter(([, v]) => v > THRESHOLD)
    .sort((a, b) => b[1] - a[1])
    .map(([k]) => k)
    .join("");
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function buildConfig(type, scores) {
  const { w, x, y, z } = scores;
  const labels = ["D", "I", "S", "C"];
  const values = [w, x, y, z];
  const pointColors = labels.map((l) => DISC_COLORS[l]);

  const yourDataset = {
    label: "Você",
    data: values,
    borderColor: "#6366f1",
    borderWidth: 2.5,
    pointBackgroundColor: pointColors,
    pointBorderColor: "#fff",
    pointBorderWidth: 2,
    pointRadius: 6,
    pointHoverRadius: 8,
  };

  const thresholdDataset = {
    label: `Limite (${THRESHOLD})`,
    data: [THRESHOLD, THRESHOLD, THRESHOLD, THRESHOLD],
    borderColor: THRESHOLD_COLOR,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderDash: [6, 6],
    pointRadius: 0,
    pointHoverRadius: 0,
    fill: false,
    tension: 0,
  };

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: true,
    animation: { duration: 350 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.92)",
        padding: 10,
        displayColors: false,
        titleFont: { family: FONT, weight: "700" },
        bodyFont: { family: FONT },
        filter: (item) => item.dataset.label !== thresholdDataset.label,
      },
    },
  };

  if (type === "radar") {
    return {
      type: "radar",
      data: {
        labels,
        datasets: [
          { ...yourDataset, backgroundColor: "rgba(99, 102, 241, 0.18)", fill: true },
          thresholdDataset,
        ],
      },
      options: {
        ...baseOptions,
        scales: {
          r: {
            min: 0,
            max: AXIS_MAX,
            ticks: {
              stepSize: 15,
              backdropColor: "transparent",
              color: "#94a3b8",
              font: { family: FONT, size: 10 },
            },
            grid: { color: "rgba(15, 23, 42, 0.08)" },
            angleLines: { color: "rgba(15, 23, 42, 0.08)" },
            pointLabels: {
              font: { family: DISPLAY_FONT, size: 16, weight: "700" },
              color: "#0f172a",
            },
          },
        },
      },
    };
  }

  if (type === "bar") {
    return {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            type: "bar",
            label: "Você",
            data: values,
            backgroundColor: pointColors,
            borderRadius: 10,
            barPercentage: 0.6,
            categoryPercentage: 0.7,
          },
          { type: "line", ...thresholdDataset },
        ],
      },
      options: {
        ...baseOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: AXIS_MAX,
            ticks: {
              stepSize: 15,
              color: "#94a3b8",
              font: { family: FONT, size: 11 },
            },
            grid: { color: "rgba(15, 23, 42, 0.06)" },
          },
          x: {
            ticks: {
              font: { family: DISPLAY_FONT, size: 16, weight: "700" },
              color: "#0f172a",
            },
            grid: { display: false },
          },
        },
      },
    };
  }

  // line
  return {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          ...yourDataset,
          backgroundColor: "rgba(99, 102, 241, 0.15)",
          fill: true,
          tension: 0.35,
        },
        thresholdDataset,
      ],
    },
    options: {
      ...baseOptions,
      scales: {
        y: {
          beginAtZero: true,
          max: AXIS_MAX,
          ticks: {
            stepSize: 15,
            color: "#94a3b8",
            font: { family: FONT, size: 11 },
          },
          grid: { color: "rgba(15, 23, 42, 0.06)" },
        },
        x: {
          ticks: {
            font: { family: DISPLAY_FONT, size: 16, weight: "700" },
            color: "#0f172a",
          },
          grid: { display: false },
        },
      },
    },
  };
}

function Result() {
  const { w, x, y, z } = useSelector((state) => state.results);
  const [chartType, setChartType] = useState("radar");
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const config = buildConfig(chartType, { w, x, y, z });
    chartRef.current = new Chart(ctx, config);

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [chartType, w, x, y, z]);

  const upperCaseAnswer = useMemo(
    () => computeDisc({ w, x, y, z }).toUpperCase(),
    [w, x, y, z]
  );

  const stats = [
    { letter: "D", value: w },
    { letter: "I", value: x },
    { letter: "S", value: y },
    { letter: "C", value: z },
  ];
  const aboveCount = stats.filter((s) => s.value > THRESHOLD).length;

  return (
    <section className="result">
      <div className="result-hero">
        <p className="result-hero__eyebrow">Seu perfil</p>
        <h1 className="result-hero__title">
          Você é um{" "}
          <span className="result-hero__type">{upperCaseAnswer || "—"}</span>
        </h1>
        <p className="result-hero__sub">
          {aboveCount > 0 ? (
            <>
              <strong>{aboveCount}</strong>{" "}
              {aboveCount > 1 ? "dimensões" : "dimensão"} acima do limite
              (&gt;{THRESHOLD}){" "}
              {aboveCount > 1 ? "compõem" : "compõe"} seu perfil.
            </>
          ) : (
            <>Nenhuma dimensão ultrapassou o limite (&gt;{THRESHOLD}).</>
          )}
        </p>
      </div>

      <div className="result-stats" role="list" aria-label="Pontuação por dimensão">
        {stats.map((s) => {
          const above = s.value > THRESHOLD;
          return (
            <div
              className={`stat${above ? " is-above" : ""}`}
              data-letter={s.letter}
              role="listitem"
              key={s.letter}
              aria-label={`${s.letter} ${s.value}${above ? " acima do limite" : ""}`}
            >
              {above && (
                <span className="stat__check" aria-hidden="true">
                  <CheckIcon />
                </span>
              )}
              <div className="stat__label">{s.letter}</div>
              <div className="stat__value">{s.value}</div>
            </div>
          );
        })}
      </div>

      <div className="result-chart">
        <div className="result-chart__header">
          <h2 className="result-chart__title">Visão geral</h2>
          <div className="chart-tabs" role="tablist" aria-label="Tipo de gráfico">
            {CHART_TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={chartType === t.id}
                className={`chart-tabs__btn${chartType === t.id ? " is-active" : ""}`}
                onClick={() => setChartType(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <canvas
          ref={canvasRef}
          className="result-chart__canvas"
          width="380"
          height="380"
          aria-label="Gráfico com pontuação D, I, S, C e linha de limite em 36"
        />
        <div className="chart-legend" aria-hidden="true">
          <span className="chart-legend__item">
            <span className="chart-legend__swatch" />
            Sua pontuação
          </span>
          <span className="chart-legend__item">
            <span className="chart-legend__swatch chart-legend__swatch--threshold" />
            Limite (&gt;{THRESHOLD})
          </span>
        </div>
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
