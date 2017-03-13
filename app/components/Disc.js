import React from 'react';


export var Disc = React.createClass({
  render() {
    return (
      <div>
        <div className="card">
            <div className="card-divider">
              Dominância(D)
            </div>
            <img src="https://www.discprofile.com/getattachment/What-is-DiSC/Overview/D.png.aspx"></img>
            <div className="card-section">
              <p>A pessoa coloca ênfase na realização de resultados o "X" da questão, a confiança</p>
              <h5>Comportaments</h5>
              <ul>
                <li>Enxerga o proposito maior</li>
                <li>Pode ser franco</li>
                <li>Aceita desafios</li>
                <li>Direto ao ponto</li>
              </ul>
            </div>
          </div>
          <div className="card">
              <div className="card-divider">
                Influênciador(I)
              </div>
              <img src="https://www.discprofile.com/getattachment/What-is-DiSC/Overview/I.png.aspx"></img>
              <div className="card-section">
                <p>A pessoa coloca ênfase em influenciar ou persuadir os outros,tem muita abertura, relações</p>
                <h5>Comportaments</h5>
                <ul>
                  <li>Demonstra entusiamo</li>
                  <li>è otimista</li>
                  <li>Gosta de colaborar</li>
                  <li>não gosta de ser ignorado</li>
                </ul>
              </div>
            </div>
            <div className="card">
                <div className="card-divider">
                  Estabilidade(S)
                </div>
                <img src="https://www.discprofile.com/getattachment/What-is-DiSC/Overview/S.png.aspx"></img>
                <div className="card-section">
                  <p>A pessoa coloca ênfase na cooperação, sinceridade, confiabilidade</p>
                  <h5>Comportaments</h5>
                  <ul>
                    <li>Não gosta de ser apressado</li>
                    <li>Maneira calma</li>
                    <li>Abordagem calma</li>
                    <li>Apoiador</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                  <div className="card-divider">
                    Conscienciosidade(C)
                  </div>
                  <img src="https://www.discprofile.com/getattachment/What-is-DiSC/Overview/C.png.aspx"></img>
                  <div className="card-section">
                    <p>A pessoa coloca ênfase na qualidade e precisão, perícia, competência</p>
                    <h5>Comportaments</h5>
                    <ul>
                      <li>Gosta de independência</li>
                      <li>Raciocínio objetivo</li>
                      <li>Quer os detalhes</li>
                      <li>tem medo de estar errado</li>
                    </ul>
                  </div>
                </div>
        </div>
    )
  }
});


export default Disc;
