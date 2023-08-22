import Search from "./components/Search"
import WeatherDisplay from "./components/WeatherDisplay";
import { useState, useEffect } from "react"
import axios from "axios"


function App() {
  
  const apiKey = process.env.REACT_APP_API_KEY;
  
  //state to hold the weather data
  const [weather, setWeather] = useState (null);
  const [cityName, setCityName] = useState('Atlanta');

  const URL =  (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
  
  const fetchWeather = async () => {
    console.log(URL)
    const response = await axios.get(URL) // Axios returns a promise
      console.log(response.data);
      setWeather(response.data);
    }
  
  // Function to get Weather
  useEffect (() => {
      fetchWeather();
    } 
  ,[]);
  
    // console.log(apiKey);
  

  return (
    <div className="App">
    <Search weatherSearch= {setCityName}/> 
    <WeatherDisplay weather={weather}/> 
    </div>
  );
} 
  
export default App;