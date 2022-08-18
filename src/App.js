
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Nomatch from './Component/NoMatch/Nomatch';
import CountryDetalis from './Component/CountrDetalis/CountryDetalis';

function App() {
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='*' element={<Nomatch/>}/>
        <Route path='/countryDetails/:country' element={<CountryDetalis/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
