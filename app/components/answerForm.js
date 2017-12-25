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

    const inputRenderers = (name, questionIndex) => [
        <p key='title'>{questions[index].subQuestions[questionIndex]}</p>,
        ...[1, 2, 3, 4].map(each => <div key={each} className='inputWrapper'>
          <input required type="radio" name={name} value={each}/>
        </div>)
      ]

    const optionRender = () => [0, 1, 2, 3].map((each) => 
      <div key={each}>
        <label>
          {inputRenderers(each.toString(), each)}
        </label>
      </div> 
    )

    return (
      <div>
        <ol className='legend'>
          <p>Legenda:</p>
          <li>Raramente</li>
          <li>Ocasionalmente</li>
          <li>Mutas vezes</li>
          <li>Maioria das vezes</li>
        </ol>
        <div className='questionContainer'>
          <div>
            <p>{questions[index].mainQuestion}</p>
          </div>
          <div>
            {[1, 2, 3, 4].map(each => <p>{each}</p>)}
          </div>
        </div>
        <form onSubmit={handleValues}  className="answerContainer">
        {optionRender()}
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
