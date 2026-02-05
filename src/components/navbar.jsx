import React from 'react'
import Checkbox from './Checkbox'
import Link from 'next/link'
import Button from './ui/buttonNew'

export default function MyNavbar() {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full flex flex-row justify-between items-center gap-4 p-4 pt-2 z-20 flex-nowrap">
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap">
          <Checkbox className="-mt-2.5 z-100" />
          <img src="/logo2.png" alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <h1 className="text-lg sm:text-2xl text-white whitespace-nowrap">
            RentN<span className="text-[#6438c2]">Go</span>
          </h1>
        </div>

        <div className="relative flex flex-row items-center gap-2 sm:gap-4 text-white text-xs sm:text-sm tracking-wide flex-nowrap">
          <Link
            href="/LogIn"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/40 hover:border-[#6438c2] hover:text-[#6438c2] transition whitespace-nowrap"
          >
            Login
          </Link>
          <div className="whitespace-nowrap">
            <Button action="Sign Up" href="/SignUp" />
          </div>
        </div>
      </nav>
    </div>
  )
}
