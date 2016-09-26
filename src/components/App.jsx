import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
            text: 'Kevin'
          }],
          correct: 'd'
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
        }
      ],
        score: 0,
        current: 1
      }
  }
  render(){
      return(
        <div>
          App
        </div>
      )
  }
}
