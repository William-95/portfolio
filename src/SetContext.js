import React from 'react'


export const StateContext=React.createContext();

export default function SetContext({children}) {
// state



  return (
   <>
   <StateContext.Provider
   value={{

   }}
   >
    {children}
   </StateContext.Provider>
   </>
  )
}
