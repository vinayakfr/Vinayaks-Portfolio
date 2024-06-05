import React from 'react'

function Checkpoints() {
  return (
    <div className='flex flex-col place-content-center place-items-center'>
        <h1 className="text-center font-semibold xl:text-7xl bg-gradient-to-tr from-zinc-950 via-rose-600 to-zinc-950 text-transparent bg-clip-text pt-16">Checkpoints</h1>
        <div className='h-[32.5rem] w-[95%] mt-14  rounded-xl grid grid-cols-2 place-items-center place-content-center'>
            <img src="trinity_logo.png" alt="" />
            <p className='text-3xl p-14'>A certified musician from Trinity College of London. Distinction in Grade 3 Electric Guitar and Merit in Grade 2 Classical Guitar.</p>
        </div>
    </div>
  )
}

export default Checkpoints;
