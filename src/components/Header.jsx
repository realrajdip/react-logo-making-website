import React from 'react'
import logo from '../assets/logo.png'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <img src={logo}  alt="logo" className='h-[40px] w-[40px]'/>
      <Button className='flex gap-2 items-center'><Download className='h-4 w-4'/> Download</Button>
    </div>
  )
}

export default Header