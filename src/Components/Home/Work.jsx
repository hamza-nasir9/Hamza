import React from 'react'

const Work = () => {
    const Heading = [ "Vibe","Restaurant", "Real Estate" , "Golf Club"]
  return (
    <div className='bg-black w-full text-center h-screen flex flex-col justify-center'>
        <h1 className='text-5xl'>
        selected work
        </h1>
        <div className="work ">
            {
                Heading.map((heading , index)=>{
                   return  <h1 className='text-[9vw] leading-30' key={ index}> {heading} </h1>   
                })
            }
        </div>
        <div className="btn">
            <button className='border border-white py-2 w-72 capitalize rounded-full'> more work</button>
        </div>
    </div>
  )
}

export default Work