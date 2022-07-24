import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';

function App() {
  return (
    <div
      className="
        mx-auto
        max-w-screen-md
        mt-4
        py-5
        px-32
        bg-gradient-to-br
        from-cyan-700
        to-blue-700
        h-fit
        shadow-xl
        shadow-gray-400"
    >
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title={'hourly forecast'}/>
    </div>
  );
}

export default App;
