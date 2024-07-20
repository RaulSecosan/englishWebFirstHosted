import { BrowserRouter, Routes, Route } from "react-router-dom";

import Jobs from "./components/pages/jobs/Jobs";
import Home from "./components/pages/home/Home";
import Animals from "./components/pages/animals/Animals";
import Words from "./components/pages/words/Words";
import Lista from "./components/pages/list/List";
import Learn from "./components/Learn/LearnHome";
import Exercise from "./components/Learn/Exercise/Exercise";
import JustWords from "./components/Learn/Exercise/exerciseWordsComponent/JustWords";
import NewWord from "./components/Learn/newWord/NewWord";
import Present from "./components/pages/present/Present";
import SomeMath from "./components/pages/someMath/SomeMath";
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
        <Route
          path="/presentForIub"
          element={<Present />}
        />
        <Route
          path="/someMath"
          element={<SomeMath />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
