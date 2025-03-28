import React from 'react'

const SayHello = () => {
    const hello = ["say Hello! say Hello!"]
  return (
    <div className='overflow-x-scroll overflow-y-hidden slide h-[80vh] items-center '>

        {
            [...hello , ...hello , ...hello].map((heading, index)=><h1 className='uppercase inline whitespace-nowrap text-[12vw]' key={index}> {heading} </h1>)

        }
    </div>
  )
}

export default SayHello