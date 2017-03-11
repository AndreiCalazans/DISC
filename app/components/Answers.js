import React from 'react';


var Answer = React.createClass({
  render: () => {
    return (
      <div className="answer">
        <p>i like to work</p>
        <form className='answerContainer' action="">
          <input type="radio" name='answer' />
          <input type="radio" name='answer' />
          <input type="radio" name='answer' />
          <input type="radio" name='answer' />
       </form>
      </div>
    )
  }
});


export default Answer;
