import { Link } from "react-router-dom"


export default function App() {

const buttons = ["LocalStorage","SessionStorage" ]
  return (
   <>
   <h1>Todo with React</h1>
   <div className="flex flex-col gap-2">
    {
    buttons.map((item,idx)=>(
      <Link key={idx} to={`/${item}`} className="bg-green-200 hover:bg-green-400 w-fit p-2 cursor-pointer mx-auto rounded-lg text-lg font-semibold text-black border border-dotted hover:border-solid border-black">{item}</Link>
    ))
   }
   </div>
   </>
  )
}
