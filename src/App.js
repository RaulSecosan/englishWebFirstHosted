import { BrowserRouter, Routes, Route } from "react-router-dom";

import Jobs from "./components/Jobs";
import Home from "./components/Home";
import Animals from "./components/Animals";
import Words from "./components/Words";
import Lista from "./components/List";
import Learn from "./components/Learn/LearnHome";
import Exercise from "./components/Learn/Exercise/Exercise";
import JustWords from "./components/Learn/Exercise/exerciseWordsComponent/JustWords";
import NewWord from "./components/Learn/newWord/NewWord";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/words" element={<Words />} />
        <Route path="/words" element={<Words />} />
        <Route path="/list" element={<Lista />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/newWord" element={<NewWord />} />
        <Route path="/learn/exercise" element={<Exercise />} />
        {/* <Route path="/learn/exercise/words" element={<JustWords database={'words'}/>} /> */}
        <Route
          path="/learn/exercise/:databaseSelected"
          element={<JustWords />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
