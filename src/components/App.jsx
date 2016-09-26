import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'The complexity of Bubble sort algorithm is',
          choices: [{
            id: 'a',
            text: 'O(n)'
          },
          {
            id: 'b',
            text: 'O(log n)'
          },
          {
            id: 'c',
            text: 'O(n2)'
          },
          {
            id: 'd',
            text: 'O(n log n)'
          }],
          correct: 'b'
        },
        {
          id: 2,
          text: 'The complexity of merge sort algorithm is',
          choices: [{
            id: 'a',
            text: ' O(n)'
          },
          {
            id: 'b',
            text: 'O(log n)'
          },
          {
            id: 'c',
            text: 'O(n log n)'
          },
          {
            id: 'd',
            text: 'O(n2)'
          }],
          correct: 'c'
        },
        {
          id: 3,
          text: 'The operation of processing each element in the list is known as',
          choices: [{
            id: 'a',
            text: 'Sorting'
          },
          {
            id: 'b',
            text: 'Merging'
          },
          {
            id: 'c',
            text: 'Inserting'
          },
          {
            id: 'd',
            text: 'Traversal'
          }],
          correct: 'd'
        },
        {
          id: 4,
          text: 'The complexity of linear search algorithm is',
          choices: [{
            id: 'a',
            text: 'O(n)'
          },
          {
            id: 'b',
            text: 'O(log n)'
          },
          {
            id: 'c',
            text: 'O(n2)'
          },
          {
            id: 'd',
            text: 'O(n log n)'
          }],
          correct: 'a'
        },
        {
          id: 5,
          text: 'Which of the following data structure is not linear data structure?',
          choices: [{
            id: 'a',
            text: 'Arrays'
          },
          {
            id: 'b',
            text: 'Linked lists'
          },
          {
            id: 'c',
            text: 'Both of above'
          },
          {
            id: 'd',
            text: 'None of above'
          }],
          correct: 'd'
        },
        {
          id: 6,
          text: 'When determining the efficiency of algorithm, the space factor is measured by',
          choices: [{
            id: 'a',
            text: 'Counting the maximum memory needed by the algorithm'
          },
          {
            id: 'b',
            text: 'Counting the minimum memory needed by the algorithm'
          },
          {
            id: 'c',
            text: 'Counting the average memory needed by the algorithm'
          },
          {
            id: 'd',
            text: 'Counting the maximum disk space needed by the algorithm'
          }],
          correct: 'a'
        },
        {
          id: 7,
          text: 'Linked lists are best suited',
          choices: [{
            id: 'a',
            text: 'for relatively permanent collections of data'
          },
          {
            id: 'b',
            text: 'for the size of the structure and the data in the structure are constantly changing'
          },
          {
            id: 'c',
            text: 'for both of above situation'
          },
          {
            id: 'd',
            text: 'for none of above situation'
          }],
          correct: 'b'
        },
        {
          id: 8,
          text: 'Arrays are best data structures',
          choices: [{
            id: 'a',
            text: 'for the size of the structure and the data in the structure are constantly changing'
          },
          {
            id: 'b',
            text: 'for both of above situation'
          },
          {
            id: 'c',
            text: 'for relatively permanent collections of data'
          },
          {
            id: 'd',
            text: 'for none of above situation'
          }],
          correct: 'c'
        }
      ],
        score: 0,
        current: 1
      }
  }
  setScore(score) {
    this.setState({score})
  }

  setCurrent(current) {
    this.setState({current})
  }
  render(){
      if(this.state.current > this.state.questions.length){
        var scorebox = '';
        var results = <Results {...this.state} />;
      }else{
        var scorebox = <Scorebox {...this.state} />;
        var results = '';
      }
      return(
        <div>
          {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
          {results}
        </div>
      )
  }
}
