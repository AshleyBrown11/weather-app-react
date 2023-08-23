// Sender Child
// Created a function in the parent component that accepts a callback as argument. Pass the function to the child component as a prop. 
export default function Search ({cityName, weatherSearch, apiKey, fetchWeather}) {


  
  
  
// handleChange - updates searchData when we type into form
  const handleChange = (event) => {
    // use the event object to detect key and value to update
    weatherSearch(event.target.value );
  };

  const handleSubmit = (evt) => {
    // prevent page from refreshing on search submission
    evt.preventDefault();
    // pass the search term to weathersearch prop, which is apps getWeather function
    // weatherSearch(cityName);
  };

  
    return (
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={cityName}
          name="cityName"
        />
        <input type="submit" value="submit" onClick={() => fetchWeather()} />
      </form>
  
  );
    }

