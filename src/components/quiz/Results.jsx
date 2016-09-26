import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Results extends Component {
  render(){
    var percent = this.props.score / this.props.questions.length * 100;
    var message = percent > 80 ? 'Awesome Job' : percent > 60 ? 'You did ok' : 'Please Try Again';
      return(
        <div className="well">
          <h4>You Got {this.props.score} out of {this.props.questions.length} correct</h4>
          <h1>{percent}% - {message}</h1>
          <hr/>
          <a href="/app">Take Again</a>
        </div>

      )
  }
}
export default Results
