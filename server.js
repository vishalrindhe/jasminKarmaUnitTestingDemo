//Install express server
const express = require('express');
const path = require('path');
const csp = require('express-csp-header');
app.use(csp({
    policies: {
        'default-src': [csp.NONE],
        'img-src': [csp.SELF],
    }
}));
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./demoJasmin'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'demoJasmin'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);   