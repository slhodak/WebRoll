
const path = require('path');
const express = require('express');

const app = express();
const port = 4001;

app.use(express.static(path.resolve(__dirname, '../'), 
{ index: 'specRunner.html' }
));
app.use('/piano_roll', express.static(path.resolve(__dirname, '../../piano_roll')));

app.listen(port, () => {
  console.log(`SpecRunner available at port ${port}`);
});
