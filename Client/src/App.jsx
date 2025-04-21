import { useState } from 'react';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import Income from './Components/Income';
import Expense from './Components/Expense';
import { useGlobalContext } from './Context/Global';
import LandingPage from './Components/HomePage/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  const global = useGlobalContext();
  console.log(global);
  const [active, setActive] = useState(1); 
  const [toggle, setToggle] = useState(false);


  const showResult = () => {
    switch (active) {
      case 1:
        return <Dashboard toggle={toggle} setToggle={setToggle} />;
      case 2:
        return <Income />;
      case 3:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };

  
  return (
    <div className="sm:flex h-screen gap-8 w-full">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={
        <div className="sm:flex h-screen p-2 gap-8 w-full">
          <NavBar active={active} setActive={setActive} toggle={toggle} setToggle={setToggle} />
          <main className="border-2 border-none bg-sky-50 flex-1 rounded-3xl overflow-auto">
            <div className="container-details px-[20px] sm:px-[1.5rem]">{showResult()}</div>
          </main>
        </div>
      } />
      </Routes>
    </div>
  );
}

export default App;
