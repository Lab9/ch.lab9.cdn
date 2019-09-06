const path = require('path');
const sassMiddleware = require('node-sass-middleware');

module.exports = sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
});
