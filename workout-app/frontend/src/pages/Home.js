import React, {useEffect, useState} from 'react'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutDetails from './WorkoutDetails'
import { useWorkoutsContext } from '../hooks/useWorkerContext'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const {state, dispatch} = useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async()=>{
      const response = await fetch('/api/workouts')
      const responseJson = await response.json()
      if(responseJson.message==='Successfull'){
        dispatch({type: 'SET WORKOUT', payload: responseJson.data})
      }
    }
    fetchWorkouts()
  },[workouts])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(  
          <WorkoutDetails key={workout._id}workout={workout}/>
        ))
        }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home