import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/context.jsx'

export default function SessionStorage() {
    const [input, setInput] = useState("")
    const {pageName,setPageName} = useContext(AuthContext)

    useEffect(() => {
      const res = sessionStorage.getItem('task') || ""
      setInput(res)
    }, [])
    

    const handleChange = (e)=>{
        setInput(e.target.value)
        sessionStorage.setItem("task",e.target.value)
    }
  return (
    <div>

    <h1>{pageName} with sessionStorage</h1>

      <form>
        <input type="text" placeholder='Enter your task' value={input} onChange={(e) => handleChange(e)} className='p-2 bg-gray-200'/>
        <button type='button'>submit</button>
      </form>
    </div>
  )
}
