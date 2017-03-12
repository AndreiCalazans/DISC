import React from 'react';
import {Link} from 'react-router';
var Answer = React.createClass({
  getInitialState: function () {
    return {
      'w': 0,
      'x': 0,
      'y': 0,
      'z': 0
    }
  },
  handleValues: function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll('input:checked');
    this.computeResults(inputs);
// change to next question
this.NextPage();

// this unchecks the previously checked inputs
    inputs.forEach((input) => {
      input.checked = false;
    })
  },
  computeResults: function (inputs) {

    inputs.forEach( (input) => {
      // add the value of the result of each selected input to the state
      if (input.name === 'w'){
        this.setState({
          'w': this.state.w + Number(input.value)
        });
      } else if (input.name === 'x'){
        this.setState({
          'x': this.state.x + Number(input.value)
        });
      } else if (input.name === 'y'){
        this.setState({
          'y': this.state.y + Number(input.value)
        });
      } else if (input.name === 'z'){
        this.setState({
          'z': this.state.z + Number(input.value)
        });
      }
    });
  },
  NextPage: function() {
    this.props.handleNextPage();
  },
  render: function () {
    var questionIndex = this.props.questionIndex;
    var questions = this.props.questions;
    function renderButton() {
      if (questionIndex + 1 === questions.length){
        return <button className=''><Link to='/result'>Result</Link></button>
      }else {
        return <button className='button'>Next</button>
      }
    };
    return (
      <div className="answer">
        <form onSubmit={this.handleValues}  className="answerContainer">
          <div>
            <label  htmlFor="firstQuestion">{questions[questionIndex].subQuestions[0]}
                <input type="radio" name='w' value='1' />
                <input type="radio" name='w' value='2' />
                <input type="radio" name='w' value='3' />
                <input type="radio" name='w' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">{questions[questionIndex].subQuestions[1]}
                <input type="radio" name='x' value='1' />
                <input type="radio" name='x' value='2' />
                <input type="radio" name='x' value='3' />
                <input type="radio" name='x' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">{questions[questionIndex].subQuestions[2]}
                <input type="radio" name='y' value='1' />
                <input type="radio" name='y' value='2' />
                <input type="radio" name='y' value='3' />
                <input type="radio" name='y' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">{questions[questionIndex].subQuestions[3]}
                <input type="radio" name='z' value='1' />
                <input type="radio" name='z' value='2' />
                <input type="radio" name='z' value='3' />
                <input type="radio" name='z' value='4' />
            </label>
          </div>
          {renderButton()}
        </form>
      </div>
    )
  }
});


export default Answer;
