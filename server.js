const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

let clickCount = 0;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/count', (req, res) => {
  res.json({ count: clickCount });
});

app.post('/api/click', (req, res) => {
  clickCount += 1;
  res.json({ count: clickCount });
});

app.post('/api/reset', (req, res) => {
  clickCount = 0;
  res.json({ count: clickCount });
});

app.listen(port, () => {
  console.log(`Click Counter app running at http://localhost:${port}`);
});
