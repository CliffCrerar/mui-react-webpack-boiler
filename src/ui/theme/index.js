import SanMarinoRazzmatazzRats_default_theme from './San Marino Razzmatazz Rats.json';

const themes = [SanMarinoRazzmatazzRats_default_theme];

// Updated theme topography
themes.forEach(theme => {
	theme.typography.useNextVariants = true;
});

export default themes;
