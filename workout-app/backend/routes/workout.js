import express from 'express';
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } from '../controllers/workoutcontroller.js';


const workoutRouter = express.Router();


// GET all workout
workoutRouter.get('/', getAllWorkouts),

// GET  a single workouts
workoutRouter.get('/:id', getWorkout)

// POST  a new workout
workoutRouter.post('/', createWorkout)


// DELETE a workout 
workoutRouter.delete('/:id', deleteWorkout)

// UPDATE  a workout 
workoutRouter.patch('/:id', updateWorkout)

export default workoutRouter;