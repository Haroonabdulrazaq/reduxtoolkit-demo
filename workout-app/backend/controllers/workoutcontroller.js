import mongoose from 'mongoose'
import Workout from '../models/workoutsmodel.js'


//GET  all Workouts
export const getAllWorkouts = async(req, res)=>{
  try {
    const workouts = await Workout.find().sort({createdAt: -1})
    res.status(201).json({message: 'Successfull', data: workouts})
  }catch(error) {
     res.status(400).json({message: 'An error occured while getting all workouts', error: error.message})
  }
}

//CREATE a Workout 
export const createWorkout = async(req, res)=>{
  const {title, reps, load } = req.body
  try{
    const workout = await Workout.create({title, reps, load})
    res.json({status: 201, message: 'Workout created successfully', workout})
  }catch(error){
    res.json({status: 400, message: 'An error occured when creating a workout', error: error.message})
  }
}

//GET  a Single Workout 
export const getWorkout = async(req, res) =>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error: 'No such workout'})
  }
  try {
    const workout = await Workout.findById({_id: req.params.id})
    if(!workout) {
      return res.status(404).json({message: 'Workout does not exist'})
    }
    res.json({status: 200, message: 'Successfull', data: workout})
  }catch(error) {
    return res.status(400).json({message: 'Oops! an error occured while fetching workout', error: error.message})
  }
}

// DELETE a Workout
export const deleteWorkout = async(req, res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.json({status: 404, error: 'No such workout'})
  }
  try{
    const workout = await Workout.findOneAndDelete({_id: id})
    if(!workout) {
      return res.json({status: 404, message: 'Workout not found'})
    }
    res.json({status: 200, message: 'Deleted successfully', workout})
  }catch(error) {
    res.json({ 
      status: 400,
      message: 'Oops!, an error occured while deleting workout',
      error: error.message
    })
  }
}

// UPDATE a Workout

export const updateWorkout = async(req, res) =>{
  const {title, reps, load } = req.body
  const {id}  = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({message: 'No such workout'})
  }

  try{
    const workout = await Workout.findOneAndUpdate(
      {_id: id},
      {...req.body},
      {new: true }  // Same as {returnOriginal: false}
    )
    if(!workout) {
      return res.status(404).json({message: 'Workout does not exist'})
    }
    res.status(201).json({message: 'Updated Successfully', workout})
  }catch(error) {
    res.status(400).json({message: 'Oops!, an error occured, while updating workout'})
  }
}