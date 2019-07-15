//  Server needed to write and read data from files

const path = require('path');
const express = require('express');

const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Piano roll service available on port ${port}`);
});
