import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar'
import Map from './components/Map';
import { Provider} from 'react-redux'
import {store} from './store/redux'
import Footer from './components/Footer';

function App() {


  return (
    <div className="app">
    <Provider store={store}>
      <Navbar />
      <Map/>
      <Footer />

    </Provider>
   

    </div>
    
  );
}

export default App;
