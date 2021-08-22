import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Productdescscreen from './screens/Productdescscreen';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <BrowserRouter>
        <Route path='/' component={Homescreen} exact />
        <Route path='/product/:id' component={Productdescscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
