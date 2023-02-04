import React, {useState} from 'react'
import useInput from './useInput'

const UserForm = () => {
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')
const [firstname, bindFirstname, resetFirstname] = useInput('')
const [lastname, bindLastname, resetLastname] = useInput('')

  const submitHandler = (e)=>{
    e.preventDefault()
    alert(`Hello ${firstname} ${lastname}`)
    resetFirstname()
    resetLastname()
  }
  return (
    <div>
      <form onSubmit={submitHandler}> 
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" {...bindFirstname} />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" {...bindLastname} />
        </div>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default UserForm