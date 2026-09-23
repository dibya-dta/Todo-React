import React, { useEffect, useState } from 'react'


export default function App() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])


  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('task')) || []
    setTask(res)
  }, [])

  useEffect(() => {
    if(task.length <= 0 ) return
    console.log(task)
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
    setInput(e.target[0].value);
    setTask((prev)=>([...prev,{id:Date.now(),task:input, isRead:false}]))
    setInput("")

  }

  const handleClick = (e,id)=>{
    // e.stopPropagation
    console.log(e.target)
    // if(e.target.name == "Read"){
    //   setTask(task.map((item)=>{
    //     return(
    //       item.id == id ? {...item, isRead:!item.isRead } : item
    //     )
    //   }))
    // }

    // if(e.target.name == "Delete"){
    //   setTask(task.map((item)=>{
    //     return(
    //       item.id == id ? {...item, isRead:!item.isRead } : item
    //     )
    //   }))
    // }
  }

  return (
    <div className='bg-[#ffffd1] '>
      Hello
      <h1>Todo app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your task' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>submit</button>
      </form>
      <button onClick={()=>localStorage.clear()}>Remove all</button>
      {
        task.length >= 0 && 
        <ul className='bg-[#a9f9ff]' >
         { task.map((item, idx)=>{
          return(
              <li key={item.id} className='bg-[#7cbd7f]'>
                <span>{item.task}</span>
                <button className={`m-2 p-2 border border-black border-solid ${item.isRead && "line-through"}`}
                 name='Read' onClick={()=>handleClick(item.id)}>Mark as read</button>
                <button className={`m-2 p-2 border border-black border-solid`} 
                name='Delete' onClick={()=>handleClick(item.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
        }
    </div>
  )
}
