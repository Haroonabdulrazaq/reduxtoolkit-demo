import express from 'express'
import dotenv from 'dotenv';
import workoutRouter from './routes/workout.js';
import mongoose from 'mongoose';

dotenv.config()
// create an express App 
const app = express()
const port = process.env.PORT || 4000;
app.use(express.json()) 

// Middleware
const logger = ((req, res, next)=>{
  console.log('Path:', req.path, 'Method:', req.method);
  next()
})

//Routes
app.get('/', logger, (req, res)=>{
  res.json({message: 'Welcome to the app'})
})

app.use('/api/workouts', logger, workoutRouter)

// Connect to monggose
mongoose.connect(process.env.MONGO_URI)
  .then((res) => {
    // Listen to request
    app.listen(port, ()=>{
      console.log(`Listening at port ${port}`);
    })
  })
  .catch((error)=> console.log(error))
