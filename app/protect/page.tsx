import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Protect() {
  return (
    <div className='h-14 w-screen m-4 border border-black text-red-400'>
        This is protected area.
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
