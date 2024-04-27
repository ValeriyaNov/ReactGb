import HomePage from './components/HomePage';
import './App.css';
import AboutPage from './components/AboutPage';
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
<ul>
<li>
<Link to="/">home</Link>
</li>
<li>
<Link to="/about">about</Link>
</li>
</ul>

<Routes>
<Route path="/" element={<HomePage />}> 
</Route>

<Route path="/about" element={<AboutPage />}> 
</Route>
</Routes>
</BrowserRouter>
);
}

export default App;
