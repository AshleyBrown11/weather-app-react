// Receiver Child
export default function WeatherDisplay({ weather }) {
    // function to return loaded JSX
    const loaded = () => {
      return (
        <>
            
            <div className="top">
            
            <div className="location">
            <p>Weather In {weather.name}</p>
         </div>
             <div className="temp">
                
         <h1>{weather.main.temp}°F</h1> 
         </div>
            <div className="description">
            <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
            <p>{weather.weather[0].description}</p>
            
            

            </div>
         <p>{weather.icon}</p>
         </div>
            <div className="bottom">
            <div className="feels">
            
          <p>{weather.main.feels_like}°F</p> 
            <p>Feels Like</p>
          </div>
            <div className="humidity">
            
          <p>{weather.main.humidity}%</p> 
            <p>Humidity</p> 
            </div>
            <div className="wind">
           
          <p>{weather.wind.speed}MPH</p> 
            <p>Wind Speed</p>
         </div>
         </div>
    </>
      );
    };
  
    // Function to return loading JSX
    const loading = () => {
      return <h2 className="weather-loading">Loading weather data....</h2>;
    };
    return weather ? loaded() : loading();
  }
  // Ternary operator will determine which functions JSX will return