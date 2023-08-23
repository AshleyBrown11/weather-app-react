// Receiver Child
export default function WeatherDisplay({ weather }) {
    // function to return loaded JSX
    const loaded = () => {
      return (
        <>
            <div className="top">
            <div className="location">
            <p>{weather.name}</p>
         </div>
             <div className="temp">
                <p>Temperature</p>
         {weather.main ? <p className="bold">{weather.main.temp}°F</p> : null}
         </div>
            <div className="description">
            <p>{weather.weather.description}</p>
            </div>
         <p>{weather.icon}</p>
         </div>
            <div className="bottom">
            <div className="feels">
            <p>Feels Like</p>
          {weather.main ? <p className="bold">{weather.main.feels_like}°F</p> : null}
           
          </div>
            <div className="humidity">
            <p>Humidity</p>
         {weather.main ? <p className="bold">{weather.main.humidity}%</p> : null}
            </div>
            <div className="wind">
            <p>Wind Speed</p>
         {weather.wind ? <p className="bold">{weather.wind.speed}MPH</p> : null}
            
         </div>
         </div>
    </>
      );
    };
  
    const loading = () => {
      return <h2>Loading weather data....</h2>;
    };
    return weather ? loaded() : loading();
  }
  