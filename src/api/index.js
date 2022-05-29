import axios from "axios";


// ................................................................................................................................
//                 Getting the location of the places within the boundary of 
//                             the current location 
//                                   or 
//                             the given location in the search bar 
//                                   or 
//                             the location on the map
// ................................................................................................................................
                         
export const getPlacesData = async (type, sw, ne) => {                               // Get places through the api
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,            // getting the south west latitude
                tr_latitude: ne.lat,            // getting the north east latitude
                bl_longitude: sw.lng,           // getting the south west longitude
                tr_longitude: ne.lng,           // getting the north east longitude
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',                     // Host of the api key
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY         // initiatlizing api key stored in .env folder
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));           // travel advisor returns filtered name of the place and reviews of the place , stored in data which is displayed on the cards
    }
    catch (error) {
        console.error(error);                                                            // handling errors
    }
};

// ................................................................................................................................
//
//                 Getting the weather of the places that we see on the map 
//      
// ................................................................................................................................
                         

export const getWeatherData = async (lat, lng) => {                                                           // get weather data through the api     
    try {
        const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`, {       
            params: {
                lat: lat,                 // getting the latitude
                lon: lng                  // getting the longitude 
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',                              // host of the weather api
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY                             // initiatlizing api key stored in .env folder
            }
        });
        return data;                                                                                         // open weather map returns the weather of the place with that name
    }
    catch (error) {                                                                                           // handling error
        console.error(error);
    }
};