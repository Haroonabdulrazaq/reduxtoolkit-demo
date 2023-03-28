import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { useWorkoutsContext } from '../hooks/useWorkerContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  const {state, dispatch} = useWorkoutsContext()

  const handleDelete = async(id)=>{
    const response = await fetch(`/api/workouts/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    if(data.status >=200 && data.status<=203){
      dispatch({type: 'DELETE_WORKOUT', payload: data.workout })
    }
  }
  const handleEdit = async(id)=>{
    let editWorkoutData =  state.workouts.filter(workout => workout._id === id)
    if(editWorkoutData.length>0){
      dispatch({type: 'EDIT_WORKOUT', payload: editWorkoutData[0] })
    }
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load(kg): </strong> {workout.load}</p>
      <p><strong>Reps: </strong> {workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span  onClick={()=>handleDelete(workout._id)}><MdDelete className='delete'/></span>
      <span  onClick={()=>handleEdit(workout._id)}><FaPen className='edit'/></span>
    </div>
  )
}

export default WorkoutDetails