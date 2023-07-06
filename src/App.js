import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizApp from './pages/Quiz';
import Err404 from './pages/Err404';
import "./components/QuizApp/QuizApp.css"
import "./styles/App.css"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= { <Home />}/>
      <Route path="/quiz" element= { <QuizApp />}/>
      <Route path="*" element= { <Err404 />}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
