// Receiver Child
function WeatherDisplay({ weather }) {
  
  // function to return loaded JSX
    const loaded = () => {
    return (
        <>
            <h1>{weather.City}</h1>
            <h2>{weather.Temp}</h2>
            <img src={weather.Icon} alt={weather.City} />
            <h2>{weather.Wind}</h2>
            <h2>{weather.Description}</h2>
            <h2>{weather.Humidity}</h2>
        </>
    );
}
  

const loading = () => {
    return <h2>Loading weather data....</h2>;
};
    return weather ? loaded() : loading();
};

export default WeatherDisplay;