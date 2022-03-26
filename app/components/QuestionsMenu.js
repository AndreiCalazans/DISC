import React from 'react';

import Question from 'Question';

var QuestionMenu = React.createClass({
  render:function(){
    return (
      <div className="row">
        <div className="text-center column small-centered medium-10 large-8">
          <Question />
        </div>
      </div>
    )
  }
});


export default QuestionMenu;
