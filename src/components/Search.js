// Sender Child
// Created a function in the parent component that accepts a callback as argument. Pass the function to the child component as a prop. 
// In the child component, created a function to pass UP to the parent. By calling the parent function prop in the child component with the child function as the argument.

export default function Search ({cityName, weatherSearch,  fetchWeather}) {

// handleChange - updates searchData when we type into form
  const handleChange = (evt) => {
    // use the event object to detect key and value to update
    weatherSearch(evt.target.value );
  };

  const handleSubmit = (evt) => {
    // prevent page from refreshing on search submission
    evt.preventDefault();
    // pass the search term to weathersearch prop, which is apps getWeather function
    
    fetchWeather()
    
  };
  
  return (
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search"
          placeholder="Enter Location"
          onChange={handleChange}
          value={cityName}
          name="cityName"
          // formAction='https://source.unsplash.com/1600x900/?" + name + "'
        />
        <input type="submit" value="submit" />
      </form>
      
  );
    }

