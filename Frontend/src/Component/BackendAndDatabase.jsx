
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BackendAndDatabase() {
const [input, setInput] = useState("")
  const [task, setTask] = useState([])
  const [loaded, setLoaded] = useState(true)




   const getTodo = async()=>{
      const res = await fetch('http://localhost:3000/api/getTodo')
      const result = await res.json()
      // console.log(result)
      setTask(result)
      setLoaded(false)
    }

  //Getting initial values form localstorage
  useEffect(() => {
    // const res = JSON.parse(localStorage.getItem('task')) || []
   

    getTodo()
  }, [])


  
  // useEffect(() => {
  //  console.log(getTodo())
  // }, [task])


  //Handling Adding task
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!input.trim()) {
      return
    }
    // setTask((prev) => ([...prev, { id: Date.now(), task: input, isRead: false }]))
    const res = await fetch('http://localhost:3000/api/addTodo',{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({task: input})
    })
    // if(res){
    //     console.log(await res.json())
    // }
    
    const result = await res.json()
    setTask((prev)=>([...prev,result]))
    // console.log(typeof(result))
    setInput("")

  }


  //Handling reading task
  const handleRead = async(id,isRead) => {
     const res = await fetch(`http://localhost:3000/api/editTodo/${id}`,{
        method: "PATCH",
        headers:{
          'Content-Type' : "application/json",
        },
        body: JSON.stringify({isRead:isRead})
      })
      const result = await res.json()
      if(result.success){
        console.log("Done")
      }else{
        console.log("not done")
      }
    setTask((prev) => (
      prev.map((item) => (
        item.id == id ? { ...item, isRead: !item.isRead } : item
      )
      )
    ))
  }


  //Handling deleting task
  const handleDelete = async(id) => {
    // const deleteTodo = async()=>{
      const res = await fetch(`http://localhost:3000/api/deleteTodo/${id}`,{
        method: "DELETE"
      })
      const result = await res.json()
      if(result.success){
        console.log("Done")
      }else{
        console.log("not done")
      }
    // }
    setTask(prev => prev.filter((item) => item.id !== id))
  }


  //Handling all removal
  const handleRemove = () => {
    setTask([])
    localStorage.removeItem('task')
  }
  return (
     <div className='bg-[#ffffd1] '>
      <Link to={'/'} className='text-black'>Back</Link>
      <p className='text-black '>Todo app</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your task' value={input} onChange={(e) => setInput(e.target.value)} className='text-black'/>
        <button type='submit'>submit</button>
      </form>
      <button onClick={handleRemove} >Remove all</button>
      {
        task.length > 0 && 
        <ul className='bg-[#a9f9ff]' >
          {task.map((item) => {
            return (
              <li key={item._id} className='bg-[#7cbd7f]'>
                <span className={` ${item.isRead && "line-through"} text-black`}>{item.task}</span>
                <button className={`m-2 p-2 border border-black border-solid text-black`}
                  name='Read' onClick={() => handleRead(item._id, !item.isRead)}>Mark as read</button>
                <button className={`m-2 p-2 border border-black border-solid text-black`}
                  name='Delete' onClick={() => handleDelete(item._id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}
