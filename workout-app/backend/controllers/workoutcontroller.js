import mongoose from 'mongoose'
import Workout from '../models/workoutsmodel.js'

export const getAllWorkouts = async(req, res)=>{
  try {
    const workouts = await Workout.find().sort({createdAt: -1})
    res.status(201).json({message: 'Successfull', data: workouts})
  }catch(error) {
     res.status(400).json({message: 'An error occured while getting all workouts', error: error.message})
  }
}

export const createWorkout = async(req, res)=>{
  const {title, reps, load } = req.body
  try{
    const workout = await Workout.create({title, reps, load})
    res.status(200).json({message: 'Workout created successfully', workout})
  }catch(error){
    res.status(400).json({message: 'An error occured when creating a workout', error: error.message})
  }
}

export const getWorkout = async(req, res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error: 'No such workout'})
  }
  try {
    const workout = await Workout.findById(req.params.id)
    if(!workout) {
      return res.status(404).json({message: 'Workout does not exist'})
    }
    res.status(200).json({message: 'Successfull', data: workout})
  }catch(error) {
    return res.status(400).json({message: 'Oops, an error occured while fetching workout', error: error.message})
  }
}