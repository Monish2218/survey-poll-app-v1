import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { buttonVariants } from './ui/button'

function Header() {
  return (
    <header className='flex flex-row'>
      <div className='w-1/2 mr-4 h-screen flex flex-col items-center justify-center'>
        <h1 className="text-4xl font-semibold text-center">
        Engage the room
        </h1>
        <p  className="mt-5 text-xl mb-8 m-4 text-center">
        Facilitate group conversations and learning with interactive Surveys, Polls and Quizzes that get remote, hybrid, and in-person audiences leaning in.
        </p>
        <div className='text-center'>
          <span className={cn(buttonVariants({ variant: "outline" }), "rounded-2xl")}><Link to="/create-poll">Create a Poll</Link></span>
          <span className={cn(buttonVariants({ variant: "destructive" }), "bg-blue-600 hover:bg-blue-800 hover:text-white mx-3 rounded-2xl")}><Link to="/create-survey">Create a Survey</Link></span>
        </div>
      </div>
      <div className='w-1/2 self-end'>
        <img src="/img-2.png" alt="hero image" style={{'borderRadius': '30%', 'height': '40rem'}}/>
      </div>
    </header>
  )
}

export default Header