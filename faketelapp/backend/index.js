const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.listen(port, () => console.log(`listening on http://localhost:${8080}`));
