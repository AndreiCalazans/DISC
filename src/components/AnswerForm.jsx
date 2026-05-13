import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { questions } from "../database/questionDb.js";

const TIER_LABELS = {
  1: "Raramente",
  2: "Ocasional",
  3: "Muitas vezes",
  4: "Maioria",
};

const LETTERS = ["w", "x", "y", "z"];

function Arrow() {
  return (
    <svg
      className="arrow"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function Dots({ tier }) {
  return (
    <span className="chip__dots" aria-hidden="true">
      {[1, 2, 3, 4].map((n) => (
        <span
          key={n}
          className={`chip__dot${n <= tier ? " is-on" : ""}`}
        />
      ))}
    </span>
  );
}

function AnswerForm({ onComplete }) {
  const index = useSelector((state) => state.index);
  const question = questions[index];
  const total = questions.length;

  // selections: { w: 1|2|3|4|null, x: ..., y: ..., z: ... }
  const [selections, setSelections] = useState({
    w: null,
    x: null,
    y: null,
    z: null,
  });

  const filledCount = useMemo(
    () => Object.values(selections).filter((v) => v !== null).length,
    [selections]
  );
  const allSelected = filledCount === 4;

  const selectFrequency = (letter, tier) => {
    setSelections((prev) => {
      const next = { ...prev };
      // If this tier is currently used by another row, clear it there (auto-swap).
      for (const key of LETTERS) {
        if (key !== letter && next[key] === tier) {
          next[key] = null;
        }
      }
      // Toggle off if user clicks the already-selected chip.
      next[letter] = prev[letter] === tier ? null : tier;
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allSelected) return;
    onComplete(selections);
  };

  const isLast = index === total - 1;
  const progressPct = ((index + 1) / total) * 100;

  return (
    <section className="quiz">
      <div className="quiz-progress" aria-label="Progresso do teste">
        <div className="quiz-progress__meta">
          <span className="quiz-progress__label">Pergunta</span>
          <span className="quiz-progress__count">
            {index + 1} <span style={{ color: "var(--text-soft)" }}>/ {total}</span>
          </span>
        </div>
        <div
          className="quiz-progress__bar"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={total}
        >
          <div
            className="quiz-progress__fill"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <form className="quiz-card" onSubmit={handleSubmit}>
        <h2 className="quiz-card__heading">{question.mainQuestion}</h2>
        <p className="quiz-card__hint">
          Atribua uma frequência diferente para cada afirmação. Cada
          frequência só pode ser usada uma vez.
        </p>

        {LETTERS.map((letter, subIdx) => (
          <div className="sub-question" key={letter}>
            <p className="sub-question__text">
              {question.subQuestions[subIdx]}
            </p>
            <div
              className="chip-group"
              role="radiogroup"
              aria-label={question.subQuestions[subIdx]}
            >
              {[1, 2, 3, 4].map((tier) => {
                const selected = selections[letter] === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    className={`chip${selected ? " is-selected" : ""}`}
                    data-tier={tier}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => selectFrequency(letter, tier)}
                  >
                    <Dots tier={tier} />
                    <span>{TIER_LABELS[tier]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="quiz-actions">
          <span className="quiz-actions__status">
            {allSelected ? (
              <span className="ok">Tudo pronto ✓</span>
            ) : (
              <>{filledCount} de 4 atribuídas</>
            )}
          </span>
          <button
            type="submit"
            className="btn btn--primary"
            disabled={!allSelected}
          >
            {isLast ? "Ver resultado" : "Próxima pergunta"} <Arrow />
          </button>
        </div>
      </form>
    </section>
  );
}

export default AnswerForm;
