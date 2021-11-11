const fs = require('fs');
const createColors = require('./colors');
const themes = require('./themes');
const createTokenColors = require('./token-colors');

for (let { colors, dest, name } of themes) {
    const theme = generateTheme(name, colors);

    fs.writeFile(dest, JSON.stringify(theme), (error) => {
        const log = error
            ? {
                  method: 'error',
                  message: error,
              }
            : {
                  method: 'log',
                  message: `Successfuly created ${name} theme`,
              };

        console[log.method](log.message);
    });
}

function generateTheme(name, colors) {
    return {
        name,
        colors: createColors(colors),
        tokenColors: createTokenColors(colors),
    };
}
