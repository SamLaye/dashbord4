import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';

function App() {
  return (
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <Home />
      </div>
  );
}

export default App;
