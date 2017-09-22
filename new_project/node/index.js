var express = require ('express');
var app = express();
app.use('/', (req, res) => {
  res.send('Vse nahuj!');
});

app.listen(4567, () => {
  console.log('Listening on port 4567');
});
