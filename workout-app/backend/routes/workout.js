import express from 'express';
import { createWorkout, getAllWorkouts, getWorkout } from '../controllers/workoutcontroller.js';


const workoutRouter = express.Router();


// GET all workout
workoutRouter.get('/', getAllWorkouts),

// GET  a single workouts
workoutRouter.get('/:id', getWorkout)

// POST  a new workout
workoutRouter.post('/', createWorkout)


// DELETE a workout 
workoutRouter.delete('/:id', (req, res)=>{
  console.log('Delete a particular workout with id');
  res.json({status: 201, message: 'Delete a workout with id'})
})

// UPDATE  a workout 
workoutRouter.patch('/:id', (req, res)=>{
  console.log('Post to workouts');
  res.json({status: 201, message: 'Edit a workout with id'})
})

export default workoutRouter;