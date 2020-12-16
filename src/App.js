import './App.css';
import QuestionContainer from "./components/questions/question_container";
import SVGName from "./components/svg/name";
import Example from "./components/svg/example";

function App() {
  return (
    <div className="App">
      <SVGName/>
      <QuestionContainer/>
    </div>
  );
}

export default App;