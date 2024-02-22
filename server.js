const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();



app.use('/api/titres', require('./src/routes/netflix-titles.route'))






app.listen(PORT, () => console.log(`Écoute sur le port ${PORT}`))