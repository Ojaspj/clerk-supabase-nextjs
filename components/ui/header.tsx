import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Header() {
  return (
    <div className=' h-14 w-full border border-black text-black'>
        Header Section hEader
        <UserButton afterSignOutUrl=''/>
    </div>
  )
}
