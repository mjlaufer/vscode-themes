const transparentColorsDark = {
    transparent00: '#ffffff00',
    transparent15: '#ffffff0f',
    transparent31: '#ffffff1f',
    transparent54: '#ffffff36',
};

const transparentColorsLight = {
    transparent00: '#00000000',
    transparent15: '#0000000f',
    transparent31: '#0000001f',
    transparent54: '#00000036',
};

const solarizedTokenColors = {
    yellow: '#b58900',
    orange: '#cb4b16',
    red: '#dc322f',
    magenta: '#d33682',
    blue: '#268bd2',
    cyan: '#2aa198',
    green: '#859900',
};

const gruvboxDarkTokenColors = {
    yellow: '#fabd2f',
    orange: '#fe8019',
    red: '#fb4934',
    magenta: '#d3869b',
    blue: '#83a598',
    cyan: '#8ec07c',
    green: '#b8bb26',
};

const gruvboxLightTokenColors = {
    yellow: '#b57614',
    orange: '#af3a03',
    red: '#9d0006',
    magenta: '#8f3f71',
    blue: '#076678',
    cyan: '#427b58',
    green: '#79740e',
};

const oceanicNextTokenColors = {
    yellow: '#fac863',
    orange: '#f99157',
    red: '#ec5f67',
    magenta: '#c594c5',
    blue: '#6699cc',
    cyan: '#5fb3b3',
    green: '#99c794',
};

const solarizedDark = {
    background: '#002b36',
    background2: '#073642',
    background3: '#184e5c',
    foreground: '#839496',
    foreground2: '#586e75',
    gray: '#586e75',
    ...transparentColorsDark,
    ...solarizedTokenColors,
};

const solarizedLight = {
    background: '#fdf6e3',
    background2: '#eee8d5',
    background3: '#e2dcc9',
    foreground: '#657b83',
    foreground2: '#93a1a1',
    gray: '#93a1a1',
    ...transparentColorsLight,
    ...solarizedTokenColors,
};

const gruvboxDark = {
    background: '#282828',
    background2: '#1d2021',
    background3: '#504945',
    foreground: '#ebdbb2',
    foreground2: '#d5c4a1',
    gray: '#a89984',
    ...transparentColorsDark,
    ...gruvboxDarkTokenColors,
};

const gruvboxDarkContrast = {
    ...gruvboxDark,
    background: '#1d2021',
    background2: '#282828',
};

const gruvboxLight = {
    background: '#fbf1c7',
    background2: '#f9f5d7',
    background3: '#d5c4a1',
    foreground: '#3c3836',
    foreground2: '#504945',
    gray: '#7c6f64',
    ...transparentColorsLight,
    ...gruvboxLightTokenColors,
};

const gruvboxLightContrast = {
    ...gruvboxLight,
    background: '#f9f5d7',
    background2: '#fbf1c7',
};

const oceanicNext = {
    background: '#242b2e',
    background2: '#1d2325',
    background3: '#30373a',
    foreground: '#d4d4d4',
    foreground2: '#7f7f7f',
    gray: '#545454',
    ...transparentColorsDark,
    ...oceanicNextTokenColors,
};

module.exports = [
    {
        name: 'Solarized Dark',
        dest: 'themes/solarized-dark.json',
        colors: solarizedDark,
    },
    {
        name: 'Solarized Light',
        dest: 'themes/solarized-light.json',
        colors: solarizedLight,
    },
    {
        name: 'Gruvbox Dark',
        dest: 'themes/gruvbox-dark.json',
        colors: gruvboxDark,
    },
    {
        name: 'Gruvbox Dark Contrast',
        dest: 'themes/gruvbox-dark-contrast.json',
        colors: gruvboxDarkContrast,
    },
    {
        name: 'Gruvbox Light',
        dest: 'themes/gruvbox-light.json',
        colors: gruvboxLight,
    },
    {
        name: 'Gruvbox Light Contrast',
        dest: 'themes/gruvbox-light-contrast.json',
        colors: gruvboxLightContrast,
    },
    {
        name: 'Oceanic Next',
        dest: 'themes/oceanic-next.json',
        colors: oceanicNext,
    },
];
