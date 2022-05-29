import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from '@material-ui/core';

// ...................importing all the components..............

import { getPlacesData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

// ..............creating multiple state Hooks to track individual values...............

const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    const [weatherData, setWeatherData] = useState([]);
    const [autocomplete, setAutocomplete] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);
    useEffect(() => {
        setFilteredPlaces(places.filter((place) => place.rating > rating));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);
    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);
            getWeatherData(coordinates.lat, coordinates.lng).then((data) => setWeatherData(data));
            getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
                setPlaces(data);
                setFilteredPlaces([]);
                setIsLoading(false);
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, bounds]);
    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
    };
    return (
//         .....................ARRANGING ALL THE COMPONENTS......................
        <React.Fragment>
            <CssBaseline />
//         .........................HEADER................................
            <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                
//         .........................HEADER END................................
                
                <Grid item xs={12} md={4}>
                    //         .........................LIST START................................
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                 //         .........................LIST END ................................
                <Grid item xs={12} md={8}>
                    //         .........................MAP START................................
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                  //         .........................MAP END................................
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default App;
