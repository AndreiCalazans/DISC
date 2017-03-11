import React from 'react';


var Answer = React.createClass({
  render: () => {
    return (
      <div className="answer">
        <form action="">
        <div>
          <input type="radio" name='answer' value='agree'/>
          <label htmlFor="">agree</label>
        </div>
        <div>
          <input type="radio" name='answer' value='agree'/>
          <label htmlFor="">agree</label>
        </div>
        <div>
          <input type="radio" name='answer' value='agree'/>
          <label htmlFor="">agree</label>
        </div>
        <div>
          <input type="radio" name='answer' value='agree'/>
          <label htmlFor="">agree</label>
        </div>
      </form>
      </div>
    )
  }
});


export default Answer;
