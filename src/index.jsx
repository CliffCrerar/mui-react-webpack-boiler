/**
 * Application main entry point
 * @summary Frameworks and other files
 * @author Cliff Crerar
 * Created at     : 2018-07-04 18:22:57
 * Last modified  : 2018-12-15 16:52:27
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './ui/theme/Pomegranate_Silver_Chalice_Donkey';
//import style from './index.css';

//TEMP
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div id='appBody'>
                <AppBar>
                    <Toolbar>
                        <Typography color='inherit' component='h6' variant='h6'>Material UI Theme - React - boiler</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('index'));