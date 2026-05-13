import React from "react";
import { Link } from "react-router-dom";

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

function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero__eyebrow">Avaliação comportamental</span>
        <h1 className="hero__title">
          Descubra seu <span className="accent">perfil DISC</span> em poucos minutos
        </h1>
        <p className="hero__subtitle">
          Responda 15 perguntas e entenda como você se comporta em diferentes
          situações: dominância, influência, estabilidade e conformidade.
        </p>
        <Link to="/questions" className="hero__cta">
          Faça o teste <Arrow />
        </Link>
        <ul className="feature-pills" aria-label="Características do teste">
          <li className="feature-pill">
            <span className="feature-pill__dot" /> 15 perguntas
          </li>
          <li className="feature-pill">
            <span className="feature-pill__dot" /> ~5 minutos
          </li>
          <li className="feature-pill">
            <span className="feature-pill__dot" /> Sem cadastro
          </li>
          <li className="feature-pill">
            <span className="feature-pill__dot" /> Resultado visual
          </li>
        </ul>
      </section>

      <section className="callout">
        <h2>O que é o DISC?</h2>
        <p>
          A avaliação DISC é uma teoria postulada pelo psicólogo Dr. William
          Moulton Marston em seu livro <i>Emotions of Normal People</i> (1928),
          publicado em português como <i>As Emoções das Pessoas Normais</i> em
          2014. Ela identifica padrões comportamentais — não a personalidade —
          a partir de emoções e comportamentos observáveis. O primeiro
          instrumento de mensuração (Activity Vector Analysis) foi desenvolvido
          por Walter Clarke em 1945.
        </p>
      </section>

      <footer className="footer">
        <p>
          Desenvolvido sem fins lucrativos por{" "}
          <a href="https://andrei-calazans.com">Andrei Calazans</a>
        </p>
      </footer>
    </>
  );
}

export default Home;
