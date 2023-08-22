import { useState} from "react"

// Sender Child
function Search(props) {
  
  const [searchData, setSearchData] = useState({
    cityName:"",
  });
  

  // handleChange - updates searchData when we type into form
  const handleChange = (event) => {
    // use the event object to detect key and value to update
    setSearchData({...searchData, [event.target.name]: event.target.value});
  };
  
  const handleSubmit  = (evt) => {
    // prevent page from refreshing on search submission
    evt.preventDefault()
    // pass the search term to weathersearch prop, which is apps getWeather function
    props.weatherSearch(searchData.cityName)
  }
  
  
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        onChange={handleChange} 
        value={searchData.cityName} name="cityName" 
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Search;