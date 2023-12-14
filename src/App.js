import './App.css';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import ContentWrapper from './components/ContentWrapper';
import LastFiveProducts from './components/LastFiveProducts';
import Tematicas from './components/Tematicas';
import LastUser from './components/LastUser';
import Paginado from './components/Paginado';


function App() {
  return (
    <div id="wrapper">
      {/*<Products */}
      <Sidebar />
      <Routes>
          <Route path='/' exact element={<ContentWrapper/>} />
          <Route path='/products/lastFiveProducts' exact element={<LastFiveProducts/>} />
          <Route path='/products/categories' exact element={<Tematicas/>} />
          <Route path='/user/lastUser' exact element={<LastUser/>} />
          <Route path='/users' exact element={<Paginado/>}  />
      </Routes>
    </div>
  );
}

export default App;
