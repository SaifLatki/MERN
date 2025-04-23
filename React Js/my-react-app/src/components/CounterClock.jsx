import React, { useState } from 'react'

function CounterClock() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-blue-200 to-purple-300 text-gray-800 font-sans'>
            <div className='text-center space-y-2 bg-white p-6 rounded-2xl shadow-lg'>
                <h1 className='text-4xl font-bold'>Counter Clock</h1>
                <h2 className='text-2xl'>🕒 Time: {new Date().toLocaleTimeString()}</h2>
                <h3 className='text-xl'>📅 Date: {new Date().toLocaleDateString()}</h3>
                <h4 className='text-lg'>📌 Day: {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h4>
            </div>

            <div className='bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4'>
                <h1 className='text-3xl font-semibold'>Counter</h1>
                <h2 className='text-5xl font-bold text-blue-600'>{count}</h2>
                <div className='flex gap-4'>
                    <button 
                        onClick={increment} 
                        className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition duration-300'>
                        ➕ Increment
                    </button>
                    <button 
                        onClick={decrement} 
                        className='px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition duration-300'>
                        ➖ Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CounterClock
