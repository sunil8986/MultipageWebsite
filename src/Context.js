import React, { createContext } from 'react'

const Mydata = createContext();

const Context = ({children}) => {
  return (
    <>
        <Mydata.Provider value={"Hello World"}>
            {children}
        </Mydata.Provider>
    </>
  )
}

export default Context;
export {Mydata};