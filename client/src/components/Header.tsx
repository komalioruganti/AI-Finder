import React from 'react';
import {Stack, Typography,AppBar,Toolbar,Button,TextField} from '@mui/material'

const Header = () => {
  return (
    <div className='flex justify-end container mx-auto my-5'>
      <ul className='flex gap-5 text-white'>
        <li>DISCORD</li>
        <li>LOGIN</li>
        <li>ADD YOUR AI</li>
      </ul>
    </div>
  )
}

export default Header