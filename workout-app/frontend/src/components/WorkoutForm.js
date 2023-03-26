import React, { useState } from 'react'

const WorkoutForm = () => {
 const [workoutForm, setWorkoutForm] =  useState({
    title: '',
    reps: 0,
    load: '',
  })
  const [error, setError] = useState(null)

  

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
    console.log(responseJson);
    if(responseJson.status >= 400){
      setError(responseJson.error)
    }
    if(responseJson.status>=200 && responseJson.status <=203){
      setError(null)
      setWorkoutForm({title: '', reps: 0, load: '' })
    }
  }
  
  const {title, reps, load} = workoutForm;
  return (
    <div>
      <form className='create'>
        <h3>Add a New Workout</h3>
        <label>Exercise Title: </label>
        <input type="text" value={title} onChange={handleChange} name='title' placeholder='Title'/>
        <label>Exercise Reps: </label>
        <input type="number" value={reps} onChange={handleChange} name='reps' placeholder='Reps'/>
        <label>Load(in Kg): </label>
        <input type="text" value={load} onChange={handleChange} name='load' placeholder='Load'/>
        <button type='button' onClick={handleSubmit}>Add workout</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm