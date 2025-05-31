import express from 'express';
import mongoose from 'mongoose';
import router from './rout.js';
import cors from 'cors'

const app = express();
const db = 'mongodb://localhost:27017/new'; // Add DB name at the end
const port = 3001;

app.use(express.json());
app.use(cors())
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

app.use('/api', router);
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
