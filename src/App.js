import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const fetchWeather =  async () => await getFormattedWeatherData({q: 'london'});

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
      <Forecast title={'daily forecast'}/>
    </div>
  );
}

export default App;
