const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const PORT = 6000;

const app = express();
app.use(homeRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
