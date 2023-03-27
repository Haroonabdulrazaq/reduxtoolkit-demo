import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { WorkoutsContext } from '../index';
import { useWorkoutsContext } from '../hooks/useWorkerContext';

const WorkoutDetails = ({workout}) => {
  const {workouts, dispatch} = useWorkoutsContext()

  const handleDelete = async(id)=>{
    const response = await fetch(`/api/workouts/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    console.log(data);
    if(data.status >=200 && data.status<=203){
      dispatch({type: 'DELETE_WORKOUT', payload: data.workout })
    }
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load(kg): </strong> {workout.load}</p>
      <p><strong>Reps: </strong> {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span  onClick={()=>handleDelete(workout._id)}><MdDelete className='delete'/></span>
    </div>
  )
}

export default WorkoutDetails