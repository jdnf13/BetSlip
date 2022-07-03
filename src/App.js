import './App.css';
import Service from './component/Service';
import AppBarCustom from './component/AppBarCustom'
function App() {
  return (
    <div>
    <header>
      <AppBarCustom></AppBarCustom>
    </header>
    <div className='container'>
        <Service></Service>
    </div>

    </div>
  );
}

export default App;
