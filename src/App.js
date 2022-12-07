import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar.js'
import Map from './components/Map.js';
import { Provider} from 'react-redux'
import {store} from './store/redux'

function App() {


  return (
    <div className="app">
    <Provider store={store}>
      <Navbar />
      <Map/>

    </Provider>
   

    </div>
    
  );
}

export default App;
