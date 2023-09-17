const express = require('express');
const bodyParser = require('body-parser');
const formumRoutes = require('./src/routes/formumRoutes');
const db = require('./db');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use(bodyParser.json());
app.use('/formum', formumRoutes);
app.use(cors({ origin: 'http://localhost:3002' }));

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en http://localhost:3001');
});

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('Error syncing database:', error));
