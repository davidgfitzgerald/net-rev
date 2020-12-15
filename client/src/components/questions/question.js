import React, {Component} from 'react';
import {alphabet} from "../../utils/utils";
import {inflect} from 'inflection'

class Question extends Component {
  constructor(props) {
    super(props);
    this.data = props.data
    this.choiceLetters = []
    this.numberOfCorrectAnswers = 0

    this.setChoiceLetters()
    this.setNumberOfCorrectAnswers()
  }

  setChoiceLetters() {
    this.choiceLetters = alphabet.substring(0, Object.keys(this.data.choices).length).split("")
  }

  setNumberOfCorrectAnswers() {
    this.numberOfCorrectAnswers = this.data.correctAnswers.length
  }

  render() {
    const data = this.data
    const choices = this.data.choices
    const numberOfCorrectAnswers = this.numberOfCorrectAnswers

    return (
      <div>
        <h3>Question</h3>
        <p>{JSON.stringify(data.question)}</p>
        <div className="pick-answers">(Pick {numberOfCorrectAnswers} {inflect('answer', numberOfCorrectAnswers)})</div>
        <form>
          {this.choiceLetters.map((letter) => {
            return (
              <div key={letter}>
                <label >
                <input type="radio" name="choice" value={choices[letter]}/>
                {letter}: {choices[letter]}
              </label>
              </div>
            )
          })}
        </form>
      </div>
    );
  }
}

export default Question;