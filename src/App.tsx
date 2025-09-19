
// import React, { useState } from 'react';
import './App.css'
import Practicingtodos from './Todos';
// import Todolist from './Todolist';
function App() {
  // const [fullname, setfullname] = useState(" ");
  // const [age, setage] = useState("")

  return (
    <>
    <Practicingtodos />
    {/* <Todolist /> */}

    {/* <form onSubmit={(e)=>{
      e.preventDefault()
      const newuser = {fullname,age}
      console.log(newuser) //--->this is the data that will be sent to the backend to the API's
    }} className='flex flex-col gap-4'>
      <input 
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
    setfullname(e.target.value)
  }
      value={fullname}
      placeholder='enter your name'
      className='p-2 border-0 rounded'
       /> <br />
      <input 
      type="text"
      onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
        setage(e.target.value)
      }
      value={age}
      placeholder='enter your age'
      className='p-2 border-0 rounded'
       /> <br />
       <button
       
       >Submit</button>
  
    </form> */}
    </>
  )
}

export default App

//concept of two way binding 
//react will only know the data from th einput tag from the stfullname from usestate hook.

//creating controlled inputs 
