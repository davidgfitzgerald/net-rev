import React from 'react';
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import { unmountComponentAtNode, render, cleanup } from 'react-dom'
import { act } from "@testing-library/react";

Enzyme.configure({adapter: new Adapter()})

import Question from "./question";
import QuestionContainer from "./question_container";

let container = null;
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
})

test.only("QuestionContainer renders (enzyme)",() => {
  const qContainer = render(<QuestionContainer/>, container)
  const wrapper = mount(qContainer)
  expect(toJson(wrapper)).toMatchSnapshot()
  // expect(qContainer).toBeTruthy()
  // console.dir(qContainer)
})

