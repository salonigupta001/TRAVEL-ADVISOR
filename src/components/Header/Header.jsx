import React from 'react';
import { Autocomplete } from '@react-google-maps/api';                                     // getting autocomplete from maps for search bar to complete search by user
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';           // getting appbar, toolbar, typography, input base and box from material ui for header/navbar
import SearchIcon from '@material-ui/icons/Search';                                        // getting icon of search for searchbar

import useStyles from './styles';                                                           //  styling the header

const Header = ({ onLoad, onPlaceChanged }) => {
    const classes = useStyles();                                                            // using inbuild hook created and returned by makeStyles in material ui 
    return (                                                                                // this portion is visible in the app
        <AppBar position='static'>                                                          // sticky  or static navbar of the app
            <Toolbar className={classes.toolbar}>                                           // it applies normal css flex, with vertical centering via alignments, some padding and min height of 56px
                {/* ...................tittle of the app.............. */}
                <Typography variant='h5' className={classes.title}>                         // write the text and css related properties without worrying about compatibility
                    Travel Advisor
                </Typography>
                {/* ...................search description of the app.............. */}
                <Box display='flex'>
                    <Typography variant='h6' className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* ...................searchbar of the app.............. */}
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>        
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;                   