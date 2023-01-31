import './App.css';
import ComponentA from './components/ComponentA';
import FetchData from './components/FetchData';
import FetchDataReq from './components/FetchDataReq';
import Namelist from './components/Namelist';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className='App'>
      <div className="PersonListMain"><h1>Data fetch API example</h1></div>
      <ComponentA />
      <Namelist />
      <PersonList />
      <FetchDataReq />
      <FetchData />
    </div>
  );
}

export default App;
