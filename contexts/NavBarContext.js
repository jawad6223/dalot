import { useState,createContext,useContext } from 'react'
const HandleContext = createContext();



const NavBarContext = ({children}) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    
 
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
  

  return (
   
<HandleContext.Provider  value={  {mobileOpen ,handleDrawerToggle}  }>
{children}
</HandleContext.Provider>

   )
   
}

const GlobalHandleContext = ()=>{
return useContext(HandleContext);
}

export  {NavBarContext ,GlobalHandleContext };
