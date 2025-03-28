import React from 'react'

const Form = () => {
  return (
    <div className='h-screen w-full flex justify-evenly'>
        <div className="left w-[45%]">
            <p className='text-4xl'>Ready to elevate your code base to new heights? Experience the exceptional expertise of a skilled mentor who effortlessly propels projects to the next level. Let’s partner with your needs to maximize your code's potential. Don't miss out on this opportunity!</p>
        </div>
        <div className="right w-[45%]">
            <form action="">
                <div className="name">
                <input type="text"  className='capitalize text-xl pb-4 px-1   focus:outline-0  w-[80%] border-b border-white' placeholder='Name'/>
                </div>
                <div className="email my-10">
                <input type="email"  className=' text-xl pb-4 px-1  focus:outline-0  w-[80%] border-b border-white' placeholder='Email'/>
                </div>
                <div className="choose my-10">
                <select  className='capitalize  text-xl pb-4 px-1  focus:outline-0  w-[80%] border-b border-white' placeholder='Name'>
                  <option className='bg-black' value="">what are interested in</option>
                  <option className='bg-black' value="">development</option>
                  <option className='bg-black' value="">consultation</option>
                  <option className='bg-black' value="">next-level success</option>
                  </select>
                </div>
                <div className="message my-10">
                <textarea placeholder='resume it in a few words' className='capitalize text-xl pb-4 px-1  focus:outline-0  w-[80%] border-b border-white' name="" id="" cols="30" rows=""></textarea>
                </div>
                <div className="privacy flex gap-5">
                  <input type="checkbox" name="" id="" />
                  <p>By sending my details, I have read and accept the Privacy policy.</p>
                </div>
                <div className="btn my-10">
                  <button className='border text-lg py-2 capitalize border-white w-72 rounded-full'>let's talks</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form