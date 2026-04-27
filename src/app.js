const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('<h1>Success!</h1><p>Your CI/CD Pipeline is working.</p>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
