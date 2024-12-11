const express = require('express'); 
const app = express(); const port = 3000; 
app.get('/', (req, res) => { res.send('Hello World!'); }); 
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`); });
//URL to start the express
//https://refactored-winner-66659x94v6g2rwrg-3000.app.github.dev/