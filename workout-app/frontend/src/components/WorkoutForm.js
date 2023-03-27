import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkerContext'


const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext()

 const [workoutForm, setWorkoutForm] =  useState({
    title: '',
    reps: 0,
    load: '',
  })
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  

  const handleChange =(e) =>{
     setWorkoutForm({...workoutForm,
      [e.target.name]: e.target.value
     })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response = await fetch('/api/workouts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workoutForm)
    })
    const responseJson = await response.json()
    if(responseJson.status >= 400){
      console.log(responseJson);
      setError(responseJson.error)
      setEmptyFields(responseJson.emptyFields)
    }
    if(responseJson.status>=200 && responseJson.status <=203){
      setError(null)
      setEmptyFields([])
      setWorkoutForm({title: '', reps: 0, load: '' })
      dispatch({type: 'CREATE_WORKOUT', payload: responseJson.workout })
    }
  }
  
  const {title, reps, load} = workoutForm;
  return (
    <div>
      <form className='create'>
        <h3>Add a New Workout</h3>
        <label>Exercise Title: </label>
        <input type="text" value={title} onChange={handleChange} name='title' placeholder='Title' className={emptyFields.includes('title')? 'error': ''}/>
        <label>Exercise Reps: </label>
        <input type="number" value={reps} onChange={handleChange} name='reps' placeholder='Reps' className={emptyFields.includes('reps')? 'error': ''}/>
        <label>Load(in Kg): </label>
        <input type="text" value={load} onChange={handleChange} name='load' placeholder='Load' className={emptyFields.includes('load')? 'error': ''}/>
        <button type='button' onClick={handleSubmit}>Add workout</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm