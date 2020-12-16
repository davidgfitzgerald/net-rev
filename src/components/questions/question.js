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

    this.submitAnswer = this.submitAnswer.bind(this)
    this.getCorrectAnswers = this.getCorrectAnswers.bind(this)
  }

  setChoiceLetters() {
    this.choiceLetters = alphabet.substring(0, Object.keys(this.data.choices).length).split("")
  }

  setNumberOfCorrectAnswers() {
    this.numberOfCorrectAnswers = this.data.correctAnswers.length
  }

  getCorrectAnswers() {
    const data = this.data
    let answers = ""
    data.correctAnswers.forEach((letter) => {
      answers += `${letter}: ${data.choices[letter]}\n`
    })
    return answers
  }

  getUserAnswers() {
    const checkboxes = document.getElementsByName("choice")
    return Array.from(checkboxes).reduce((filtered, box) => {
      if (box.checked) {
        filtered.push(box)
      }
      return filtered
    }, [])
  }

  submitAnswer(event) {
    event.preventDefault()
    console.log("submitAnswer called")
    let userAnswers = this.getUserAnswers()
    let alertString =`You answered:\n`
    userAnswers.forEach((ans)=>{
      alertString += `${ans.id}: ${ans.value}\n`
    })
    alertString += `\nThe correct answers are:\n${this.getCorrectAnswers()}`
    alert(alertString)
  }



  render() {
    const data = this.data
    const choices = this.data.choices
    const numberOfCorrectAnswers = this.numberOfCorrectAnswers

    return (
      <div>
        <p>{data.question}</p>
        <form onSubmit={this.submitAnswer}>
          <fieldset>
              <legend>(Pick {numberOfCorrectAnswers} {inflect('answer', numberOfCorrectAnswers)})</legend>
            <div className="answer-selection">
              {this.choiceLetters.map((letter) => {
                return (
                  <div key={letter}>
                    <label>
                      <input type="checkbox" name="choice" id={letter} value={choices[letter]}/>
                      {letter}: {choices[letter]}
                    </label>
                  </div>
                )
              })}</div>
          <button type="submit">Submit Answers</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Question;