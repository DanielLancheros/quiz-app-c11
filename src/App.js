import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizApp from './pages/QuizApp';
import Err404 from './pages/Err404';
import './styles/App.css';

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
