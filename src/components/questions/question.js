import React, {Component} from 'react';
import {alphabet, inflect} from "../../utils/utils";

class Question extends Component {
  constructor(props) {
    super(props);
    this.data = props.data
    this.choiceLetters = this.getChoiceLetters()
    this.correctAnswers = props.data.correctAnswers
    this.numberOfCorrectAnswers = props.data.correctAnswers.length

    this.submitAnswer = this.submitAnswer.bind(this)
  }

  getChoiceLetters() {
    return alphabet.substring(0, Object.keys(this.data.choices).length).split("")
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
    let userAnswers = this.getUserAnswers()
    let correctAnswers = this.correctAnswers
    console.log(correctAnswers)

    let alertString =`You answered:\n`
    userAnswers.forEach((ans)=>{
      alertString += `${ans.id}: ${ans.value}\n`
    })
    alertString += `\nThe correct ${inflect('answer is', correctAnswers.length)}:\n${correctAnswers}`
    alert(alertString)
  }



  render() {
    console.log("render called")
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