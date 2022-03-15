import { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.scss';
import { SelectedToothProvider } from './component/Context/SelectedToothContext';
import DentelMap from './component/DantelMap/DentelMap';
import Home from './component/Home/Home';
import InPain from './component/InPain/InPain';
import ToothSelect from './component/ToothSelection/ToothSelect';

function App() {
  const info = {
    right: false,
    left: false,
    upper: false,
    lower: false,
    Upincisor: false,
    Loincisor: false,
    Upcanine: false,
    Locanine: false,
    Uppremolar: false,
    Lopremolar: false,
    Upmolar: false,
    Lomolar: false,

}
  const [selectedTeath, setSelectedTeath] = useState({});
  const [teathPositionInfo, setTeachPostionInfo] = useState(info); 
  return (
    <div className="App">
      <SelectedToothProvider value={{selectedTeath, setSelectedTeath,teathPositionInfo, setTeachPostionInfo}}>
      <Router>
        <Routes>
              <Route path="/" element={ <Home/>}/>
              <Route path="/inpain" element={<InPain/>}/>
              <Route path="/dentalmap" element={ <DentelMap/>}/>        
              <Route path="/selected" element={<ToothSelect/> }/>        
      </Routes>
      </Router>
      </SelectedToothProvider>
      
    </div>
  );
}



export default App;
