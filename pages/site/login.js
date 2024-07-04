import { Box,CssBaseline ,Toolbar} from '@mui/material'
import React from 'react'
import TopBar from '@/Components/Site/Navbar/TopBar'
import SideBar from '@/Components/Site/Navbar/SideBar'



import Login from '@/Components/Site/Login'

const login = () => {
  return (
    <Box sx={{ marginX:{xs:2,sm:3} }}>
    <CssBaseline />
      <TopBar />
      <SideBar />
      <Box >
        <Toolbar />
    
        <Login />

       
        </Box>

      
    </Box>
  )
}


export default login



