import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Question extends Component {
  onChange(e) {
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;
    let selected = e.target.value;
    if(selected == question.correct) {
      setScore(this.props.score+1);
    }
    setCurrent(this.props.current+1);
  }
  render(){
    const {question} = this.props;
      return(
        <div className="well">
          <h3>{question.text}</h3>
          <ul className="list-group">
            {this.props.question.choices.map(choice => {
              return(
                <li className="list-group-item" key={choice.id}>
                  <div className="row">
                    <div className="col-md-1">
                      <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id}/>
                    </div>
                    <div className="col-md-11">
                      {choice.id}. <span>  {choice.text}</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )
  }
}
