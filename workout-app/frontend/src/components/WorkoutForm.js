import React, { useState, useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkerContext'

const WorkoutForm = () => {
  const {state, dispatch} = useWorkoutsContext()

  const { workoutDetail, isEditing } = state;


  const [workoutForm, setWorkoutForm] = useState({
    title: isEditing ? workoutDetail.title : '',
    reps: isEditing ? workoutDetail.reps : 0,
    load: isEditing ? workoutDetail.load : '',
  });

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  useEffect(()=>{
    if(isEditing){
      setWorkoutForm({
        title: workoutDetail.title,
        reps: workoutDetail.reps,
        load: workoutDetail.load
      })
    }
  },[isEditing])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setWorkoutForm({
      ...workoutForm,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workoutForm)
    });
    const responseJson = await response.json();
    if (responseJson.status >= 400) {
      setError(responseJson.error);
      setEmptyFields(responseJson.emptyFields);
    }
    if (responseJson.status >= 200 && responseJson.status <= 203) {
      setError(null);
      setEmptyFields([]);
      setWorkoutForm({ title: '', reps: 0, load: '' });
      dispatch({ type: 'CREATE_WORKOUT', payload: responseJson.workout });
    }
  };

  const handleEdit = () => {
    dispatch({ type: 'EDIT_WORKOUT', payload: { id: workoutDetail.id } });
    setWorkoutForm({
      title: workoutDetail.title,
      reps: workoutDetail.reps,
      load: workoutDetail.load,
    });
  };

  const cancelEdit = (workout) => {
    dispatch({type: 'EDIT_COMPLETE', payload: false, workout })
    setWorkoutForm({ title: '', reps: 0, load: '' });
  }

  const submitEdit= async()=>{
    const response = await fetch(`/api/workouts/${workoutDetail._id}`,{
      method: 'PATCH',
      body: JSON.stringify(workoutForm),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    if(data.status >=200 && data.status<=203){
      cancelEdit(data.workout)
    }
  }

  return (
    <div>
      <form className="create">
        <h3>{isEditing ? 'Edit' : 'Add a New'} Workout</h3>
        <label>Exercise Title: </label>
        <input
          type="text"
          value={workoutForm.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label>Exercise Reps: </label>
        <input
          type="number"
          value={workoutForm.reps}
          onChange={handleChange}
          name="reps"
          placeholder="Reps"
          className={emptyFields.includes('reps') ? 'error' : ''}
        />
        <label>Load (in Kg): </label>
        <input
          type="text"
          value={workoutForm.load}
          onChange={handleChange}
          name="load"
          placeholder="Load"
          className={emptyFields.includes('load') ? 'error' : ''}
        />
        {isEditing ? (
          <button type="button" onClick={submitEdit}>
            Save Changes
          </button>
        ) : (
          <button type="button" onClick={handleSubmit}>
            Add Workout
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
      {isEditing && (
        <button type="button" className="cancel-edit" onClick={cancelEdit}>
          Cancel Edit
        </button>
      )}
    </div>
  )
}
  export default WorkoutForm;

