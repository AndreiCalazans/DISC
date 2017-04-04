import React from 'react';
import {connect} from 'react-redux';
import {questions} from '../database/questionDb';




var AnswerForm = React.createClass({
  render() {
    var {index , handleValues, dispatch} = this.props;

    const renderButton = () => {
      if(index === 14) {
        return <input type='submit' className="button" value='Resultado'/>;
      }else {
        return <input type='submit' className="button" value='Proxima questão'/>;
      }
    };
    return (
      <div>

        <div className='questionContainer'>
          <div>
            <p>{questions[index].mainQuestion}</p>
          </div>
          <div>
            <p>raramente</p>
            <p>ocasionalmente</p>
            <p>Muitas vezes</p>
            <p>Maioria da vezes</p>
          </div>
      </div>
        <form onSubmit={handleValues}   className="answerContainer">
          <div>
            <label  htmlFor="firstQuestion">
              <p>{questions[index].subQuestions[0]}</p>
                <input required type="radio" name='w' value='1' />
                <input required type="radio" name='w' value='2' />
                <input required type="radio" name='w' value='3' />
                <input required type="radio" name='w' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">
                <p>{questions[index].subQuestions[1]}</p>
                <input required type="radio" name='x' value='1' />
                <input required type="radio" name='x' value='2' />
                <input required type="radio" name='x' value='3' />
                <input required type="radio" name='x' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">
                <p>{questions[index].subQuestions[2]}</p>
                <input required type="radio" name='y' value='1' />
                <input required type="radio" name='y' value='2' />
                <input required type="radio" name='y' value='3' />
                <input required type="radio" name='y' value='4' />
            </label>
          </div>
          <div>
            <label htmlFor="">
                <p>{questions[index].subQuestions[3]}</p>
                <input required type="radio" name='z' value='1' />
                <input required type="radio" name='z' value='2' />
                <input required type="radio" name='z' value='3' />
                <input required type="radio" name='z' value='4' />
            </label>
          </div>
            {renderButton()}
        </form>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(AnswerForm);
