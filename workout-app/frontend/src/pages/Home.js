import React, {useEffect, useState} from 'react'
import WorkoutForm from '../components/WorkoutForm'
import WorkoutDetails from './WorkoutDetails'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async()=>{
      const response = await fetch('/api/workouts')
      const responseJson = await response.json()
      if(responseJson.message==='Successfull'){
        setWorkouts(responseJson.data)
      }
    }
    fetchWorkouts()
  })

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