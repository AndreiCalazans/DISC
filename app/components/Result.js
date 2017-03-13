import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
export const Result = React.createClass({
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
