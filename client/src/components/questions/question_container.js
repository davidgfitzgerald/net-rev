import React, {Component} from 'react';
import './questions.css'
import _ from 'lodash'
import Question from "./question";

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      askNext: null,
      asked: [],
      isLoaded: false
    }
    this.askNext = this.askNext.bind(this)
  }

  askNext(questions) {
    return _.sample(questions)
  }

  componentDidMount() {
    fetch('/api/questions')
      .then(res => res.json())
      .then(allQuestions => {
        let askNext = this.askNext(allQuestions)
        this.setState({
          allQuestions,
          askNext,
          isLoaded: true
        })
      })
  }

  render() {
    return (
      <div>
        {(()=> {
          if (this.state.isLoaded) {
            return <Question data={this.state.askNext}/>;
          } else {
            return <h1>NOT Loaded.</h1>;
          }
        })()}
      </div>
    )
  }
}

export default QuestionContainer;