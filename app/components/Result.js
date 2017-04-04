import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Chart from 'chart.js';
export const Result = React.createClass({
  componentDidMount: function() {
    let ctx = this.refs.myChart;
    var {w , x , y , z} = this.props;
    let data = [w, x , y, z];
    var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ["Dominância (D)", "Influênciador (I)", 'Estabilidade (S)', 'Conscienciosidade (C)'],
    datasets: [
        {
            label: "Seu DISC",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: data
        }
    ]
},
    options: {
            scale: {
                reverse: false,
                ticks: {
                    beginAtZero: true
                }
            }
    }
});
  },
  render () {
    var {w , x , y , z} = this.props;
    const calculateDisc = () => {
      var disc = {
        d: w,
        i: x,
        s: y,
        c: z
    };
      var arrayOfDisc =[];
      for (var letter in disc) {
        arrayOfDisc.push([letter, disc[letter]]);
      };
    var answer = '';
    var result = arrayOfDisc.filter((each) => {
      return each[1] > 36;
    }).sort( (a,b ) => {
      if (a[1] < b[1]){
        return +1;
      } else if (a[1] > b[1]) {
        return -1;
      } else {
        return 0;
      }
    }).forEach((e) => {
      return answer = answer.concat(e[0]);
    });
    return <h1>Voçe é um <span style={{color: 'red'}}> {answer.toUpperCase()}</span></h1>
    };
    return (
      <div >
        {calculateDisc()}
        <div>
          <table>
            <tr>
              <td>D = {w}</td>
              <td>I = {x}</td>
              <td>S = {y}</td>
              <td>C = {z}</td>
            </tr>
          </table>
        </div>
        <canvas ref='myChart' id="myChart" width="400" height="400"></canvas>
        <div>
          <Link to='/disc'>aprenda sobre os diferentes comportamentos</Link>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state.results;
  }
)(Result);
