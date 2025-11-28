import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShowQuiz from "./Pages/ShowQuiz/ShowQuiz";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import ProblemSolvingPage from "./Pages/ProblemSolvingPage/ProblemSolvingPage";
import QuestionsPage from "./Pages/QuestionsPage/QuestionsPage";
import Polyfillpage from "./Pages/Polyfillpage/Polyfillpage";
import BeginnerPage from "./Pages/Polyfillpage/BeginnerPage";
import IntermediatePage from "./Pages/Polyfillpage/IntermediatePage";
import JSmethods from "./Pages/JSmethods/JSmethods";
import MethodDetail from "./Pages/MethodDetail/MethodDetail";
import DsaArray from "./Components/DsaTopics/DsaArray/DsaArray";
import DsaString from "./Components/DsaTopics/DsaString/DsaString";
import DsaLinkedList from "./Components/DsaTopics/DsaLinkedList/DsaLinkedList";
import DsaStack from "./Components/DsaTopics/DsaStack/DsaStack";
import DsaQueue from "./Components/DsaTopics/DsaQueue/DsaQueue";
import DsaRecursion from "./Components/DsaTopics/DsaRecursion/DsaRecursion";
import PatternDetail from "./Pages/PatternDetail/PatternDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizId" element={<ShowQuiz />} />
        <Route path="/results" element={<ReviewPage />} />
        <Route path="/problem-solving-questions" element={<ProblemSolvingPage />} /> 
        <Route path="/questions/:topic" element={<QuestionsPage />} />
        <Route path="/practice-polyfills" element={<Polyfillpage />} />

        {/* Dynamic Beginner & Intermediate Pages */}
        <Route path="/polyfills/:type/beginner" element={<BeginnerPage />} />
        <Route path="/polyfills/:type/intermediate" element={<IntermediatePage />} />
        {/*dynamic routes for methods  */}
        <Route path="/explore-js-methods" element={<JSmethods/>} />
        <Route path="/methods/:category/:level" element={<MethodDetail />} />
        {/* dsa topics practice question */}
        <Route path="/dsa/arrays" element={<DsaArray />} />
        <Route path="/dsa/strings" element={<DsaString />} />
        <Route path="/dsa/linked-list" element={<DsaLinkedList />} />
        <Route path="/dsa/stack" element={<DsaStack />} />
        <Route path="/dsa/queue" element={<DsaQueue />} />
        <Route path="/dsa/recursion" element={<DsaRecursion />} />

        {/* Dynamic Pattern Route */}
          <Route path="/patterns/:name" element={<PatternDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
