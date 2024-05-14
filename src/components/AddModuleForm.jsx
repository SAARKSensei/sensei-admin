import React from 'react'
import Image from 'next/image'
import InnerNavBar from "@/components/InnerNavBar";

const AddModuleForm = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex justify-center mt-8 gap-20'>
        
       <div  className='flex justify-start '>
       <form action="">
<div className='flex flex-col gap-5 '>
<div>
            <label className="block text-gray-700"> Session</label>    
            <select className="switch shadow-2xl mt-1 px-14 py-2 block shadow-lg text-black	focus:ring-indigo-500 focus:border-indigo-500 text-center rounded-md sm:text-sm">
          <option value="">Select</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
        </select>
            </div>
            <div>
            <label className="block text-gray-700">Module No.</label>    
            <select className="shadow-2xl mt-1 px-5 py-2 block border-2	 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
        </select>
            </div>

            <div>
            <label className="block text-gray-700">Module Name</label>    
           <input className='shadow-2xl mt-1 px-20 py-2 block border-2	 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' placeholder='Type Here' />
            </div>

        <div className='flex flex-row  gap-[40px]'>
        <div>
            <label className="block text-gray-700">Subject</label>    
            <select className="shadow-2xl mt-1 px-3 py-2 block border-2	 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select</option>
          <option value="1">Mental Health</option>
          <option value="2">CSE</option>
          <option value="3">Moral Values</option>
          <option value="4">Career Exploration</option>
        </select>
            </div>

            <div>
            <label className="block text-gray-700">Grade</label>    
            <select className="shadow-2xl mt-1 px-3 py-2 block border-2	 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select</option>
          <option value="1">Mental Health</option>
          <option value="2">CSE</option>
          <option value="3">Moral Values</option>
          <option value="4">Career Exploration</option>
        </select>
            </div>

            <div>
            <label className="block text-gray-700">Duration</label>    
            <select className="shadow-2xl mt-1 px-3 py-2 block border-2	 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="">Select</option>
          <option value="1">Mental Health</option>
          <option value="2">CSE</option>
          <option value="3">Moral Values</option>
          <option value="4">Career Exploration</option>
        </select>
            </div>

        </div> 
        <div className='flex flex-col'>
                <label htmlFor="">Description</label>
                <textarea className='w-[560px] h-[168px]' placeholder='Type here'></textarea>
            </div>  
    </div> 
        </form>
       </div>
<div className='flex flex-col gap-10'>
    <p>Attach file</p>
  <div className='w-[400px] h-[400px] rounded-xl flex justify-center flex-col bg-slate-100'>
      <Image 
      src=""
      alt="attachmentIcon"
      />
  </div>
</div>
    </div>
  
    </div>
  )
}

export default AddModuleForm