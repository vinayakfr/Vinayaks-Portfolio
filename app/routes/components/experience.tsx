import React from 'react'

const Experience = () => {
  return (
    <div className='flex justify-between mx-16 my-36'>
        <div className='w-[700px] h-[700px] bg-zinc-800 rounded-2xl shadow-2xl'>
        </div>
        <div className='w-[700px] h-[300px] bg-zinc-800 rounded-2xl shadow-2xl'>
            <h1 className="flex justify-center py-28 text-6xl">Experience</h1>
            <div className="h-40 w-40 rounded-full bg-gradient-to-tl from-blue-500 to-transparent opacity-70 -translate-y-[375px] translate-x-[600px]"></div>
            <div className="flex gap-4 opacity-80 -translate-y-56 -translate-x-[50px] ">
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-teal-600 to-teal-700"></div>
                <div className="h-36 w-36 rounded-full bg-gradient-to-r from-teal-700 to-transparent"></div>
            </div>
        </div>
    </div>
  )
}

export default Experience
