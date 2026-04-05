import React, { useState } from 'react'


const App = () => {

const [title, settitle] = useState('')
const [details, setDetails] = useState('')
const [task, settask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault();
    
    const copyTask = [...task]
    copyTask.push({title,details})
    settask(copyTask)


    settitle ('')
    setDetails('')
  }

  const deletnote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    settask(copyTask)
  }
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white ' >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start flex-col gap-4 lg:w-1/2 p-10'>
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
         <input  className ='px-5 py-2 w-full border-2 rounded  font-medium outline-none'type="text" placeholder='Enter Notes Heading' 
          value = {title} onChange = {(e)=>{
            settitle(e.target.value)
          }}/>
        <textarea className ='px-5 py-2 w-full flex items-start  font-medium flex-row h-32 border-2 rounded outline-none' type="text" placeholder='write details'
        value = {details} onChange = {(e)=>{
            setDetails(e.target.value)
          }} />
        <button className='px-5 py-2 active:bg-gray-300 w-full  bg-white text-black font-medium rounded outline-none '>Add Note</button>

        
      </form>
      <div className=' lg:w-1/2  lg:border-l-2  p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {
            task.map(
              function(elem,idx){
                return <div key={idx} className=' flex flex-col items-start justify-between relative h-52 w-40  bg-cover py-10 pb-4 px-4 bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)] rounded-2xl text-black overflow-hidden '> 
                <div className='flex-1 overflow-auto'>
                  <h3 className='leading-tight font-bold text-lg wrap-break-word'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600 wrap-break-word'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                      deletnote(idx)
                }} className='w-full bg-amber-600 cursor-pointer active:scale-95 text-white  text-xs font-bold rounded py-2'> Delete</button>
                </div>
                
              }
            )  
          }
        </div>
      </div>
    </div>
  )
}

export default App

