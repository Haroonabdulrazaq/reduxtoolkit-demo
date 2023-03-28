import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

const initialState ={
  workouts: [],
  isEditing: false,
  workoutDetail: {}
}

export const workoutsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_WORKOUTS':
      return { 
        ...state,
      }
    case 'SET_WORKOUTS':
      return { 
        ...state,
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      }
    case 'DELETE_WORKOUT':
      return { 
        ...state,
        workouts: state.workouts.filter(w => w._id !== action.payload._id),
      }
    case 'EDIT_WORKOUT':
      return {
        ...state,
        workoutDetail: action.payload,
        isEditing: true
      }
      case 'EDIT_COMPLETE':
        const otherWorkouts = state.workouts.filter((w)=> w._id !== action.workout._id)
      return {
        ...state,
        isEditing: action.payload,
        workouts: [action.workout,...otherWorkouts]
      }
    default:
      return state
  }
}

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, initialState)

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}