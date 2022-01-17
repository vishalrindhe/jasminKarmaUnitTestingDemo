const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/demojasmin'));
// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname+'/dist/abcddemo/index.html'));
// });
// app.get('*', (req, res) => {
//     res.sendFile(`./abcd/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
// });

app.get('/*',(req, res)=> {
    res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'})
  });
app.listen(process.env.PORT || 8080);
