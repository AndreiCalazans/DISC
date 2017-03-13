import React from 'react';
import {connect} from 'react-redux';

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
    return <h1>You are {answer.toUpperCase()}</h1>
    };
    return (
      <div>
        <h1>The result is </h1>
        {calculateDisc()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state.results;
  }
)(Result);
