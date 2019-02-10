import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import themes from './ui/theme';

const theme = createMuiTheme(themes[0]);

const App = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="AppWrapper">
				<AppBar>
					<Toolbar>
						<Typography color="inherit" component="h6" variant="h6">
							Material UI Theme - React - boiler
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		</MuiThemeProvider>
	);
};

export default App;
