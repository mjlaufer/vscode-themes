const solarizedDark = {
    transparent00: '#ffffff00',
    transparent15: '#ffffff0f',
    transparent31: '#ffffff1f',
    transparent54: '#ffffff36',

    background: '#002b36',
    background2: '#073642',
    background3: '#184e5c',

    foreground: '#839496',
    foreground2: '#586e75',

    gray: '#586e75',

    yellow: '#b58900',
    orange: '#cb4b16',
    red: '#dc322f',
    magenta: '#d33682',
    blue: '#268bd2',
    cyan: '#2aa198',
    green: '#859900',
};

const solarizedLight = {
    transparent00: '#00000000',
    transparent15: '#0000000f',
    transparent31: '#0000001f',
    transparent54: '#00000036',

    background: '#fdf6e3',
    background2: '#eee8d5',
    background3: '#e2dcc9',

    foreground: '#657b83',
    foreground2: '#93a1a1',

    gray: '#93a1a1',

    yellow: '#b58900',
    orange: '#cb4b16',
    red: '#dc322f',
    magenta: '#d33682',
    blue: '#268bd2',
    cyan: '#2aa198',
    green: '#859900',
};

const gruvboxDark = {
    transparent00: '#ffffff00',
    transparent15: '#ffffff0f',
    transparent31: '#ffffff1f',
    transparent54: '#ffffff36',

    background: '#282828',
    background2: '#3c3836',
    background3: '#504945',

    foreground: '#ebdbb2',
    foreground2: '#d5c4a1',

    gray: '#a89984',

    yellow: '#fabd2f',
    orange: '#fe8019',
    red: '#fb4934',
    magenta: '#d3869b',
    blue: '#83a598',
    cyan: '#8ec07c',
    green: '#b8bb26',
};

const gruvboxLight = {
    transparent00: '#00000000',
    transparent15: '#0000000f',
    transparent31: '#0000001f',
    transparent54: '#00000036',

    background: '#fbf1c7',
    background2: '#ebdbb2',
    background3: '#d5c4a1',

    foreground: '#3c3836',
    foreground2: '#504945',

    gray: '#7c6f64',

    yellow: '#b57614',
    orange: '#af3a03',
    red: '#9d0006',
    magenta: '#8f3f71',
    blue: '#076678',
    cyan: '#427b58',
    green: '#79740e',
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
        name: 'Gruvbox Light',
        dest: 'themes/gruvbox-light.json',
        colors: gruvboxLight,
    },
];
