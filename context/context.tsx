import { ReactNode, createContext, useState } from 'react'

export const allPlatformsContext = createContext([])

export interface IContext {
  children?: ReactNode
}

export const Context = ({ children }: IContext) => {
  const [allPlatforms, setAllPlatforms] = useState([])

  return (
    <allPlatformsContext.Provider value={allPlatforms}>
      {children}
    </allPlatformsContext.Provider>
  )
}
