import React from 'react';
import {Link} from 'react-router';
var Home = React.createClass({
  render: () => {
    return (
      <div className='row '>
        <div className="landingImg">
          <div className='landing-text'>
            <p>Aprenda sobre o seu comportamento fazendo o DISC</p>
          </div>
          <div className='btn-box'>
            <Link to="/questions">
            <button className="btn">Começe</button>
          </Link>
          </div>
        </div>
        <div className="callout">
          <p>Avaliação Disc é uma teoria postulada pelo psicólogo Dr. William Moulton Marston em seu livro "Emotions of Normal People"[1] (1928), publicado pela primeira vez em português no ano de 2014, com o nome de "As Emoções das Pessoas Normais", que determina alguns padrões de comportamento. A partir desta teoria, foram elaboradas ferramentas para análise de perfil comportamental, sendo o primeiro instrumento de mensuração (Activity Vector Analysis) desenvolvido por Walter Clarke (1945).
             Tais avaliações consideram comportamentos ou emoções observáveis, não abrangendo, portanto, a personalidade dos indivíduos.</p>
        </div>
        <footer><p>Desenvolvido por <a href="https://andreicalazans.github.io/">Andrei Calazans</a></p></footer>

      </div>
    )
  }
});

module.exports = Home;
