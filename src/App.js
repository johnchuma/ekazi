import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './layouts/websiteLayout';
import HomePage from './pages/homePage';


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<WebsiteLayout/>}>
        <Route path='/' index element={<HomePage/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
