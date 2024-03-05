import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full h-12 border-0 rounded-lg bg-slate-700">
      <ul className='flex items-center justify-center h-12'>
        <li className='mx-5 hover:text-blue-500'>
          <Link href={'/create'}>Add</Link>
        </li>
        <li className='mx-5 hover:text-blue-500'>
          <Link href={'/view'}>View</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar