import { ReactNode, createContext, useState } from 'react'

export type AllPlatforms = {
  allPlatformsCtx: {}
  setAllPLatformsCtx: (a: {}) => void
}
export type AllGenres = {
  allGenresCtx: {}
  setAllGenresCtx: (a: {}) => void
}

export const allPlatformsContext = createContext<AllPlatforms>({
  allPlatformsCtx: {},
  setAllPLatformsCtx: () => {},
})
export const allGenresContext = createContext<AllGenres>({
  allGenresCtx: {},
  setAllGenresCtx: () => {},
})

export interface IContext {
  children?: ReactNode
}

export const Context = ({ children }: IContext) => {
  const [allPlatformsCtx, setAllPLatformsCtx] = useState<{}>({})
  const [allGenresCtx, setAllGenresCtx] = useState<{}>({})

  return (
    <allPlatformsContext.Provider
      value={{ allPlatformsCtx, setAllPLatformsCtx }}
    >
      <allGenresContext.Provider value={{ allGenresCtx, setAllGenresCtx }}>
        {children}
      </allGenresContext.Provider>
    </allPlatformsContext.Provider>
  )
}
