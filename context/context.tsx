import { ReactNode, createContext, useState } from 'react'

export type AllPlatforms = {
  allPlatformsCtx: object
  setAllPLatformsCtx: (a: object) => void
}
export type AllGenres = {
  allGenresCtx: object
  setAllGenresCtx: (a: object) => void
}

export type UserId = {
  userIdCtx: string
  setUserIdCtx: (u: string) => void
}

export const allPlatformsContext = createContext<AllPlatforms>({
  allPlatformsCtx: {},
  setAllPLatformsCtx: () => {},
})
export const allGenresContext = createContext<AllGenres>({
  allGenresCtx: {},
  setAllGenresCtx: () => {},
})

export const userIdContext = createContext<UserId>({
  userIdCtx: '',
  setUserIdCtx: () => {},
})

export interface IContext {
  children?: ReactNode
}

export const Context = ({ children }: IContext) => {
  const [allPlatformsCtx, setAllPLatformsCtx] = useState<object>({})
  const [allGenresCtx, setAllGenresCtx] = useState<object>({})
  const [userIdCtx, setUserIdCtx] = useState<string>('')

  return (
    <userIdContext.Provider value={{ userIdCtx, setUserIdCtx }}>
      <allPlatformsContext.Provider
        value={{ allPlatformsCtx, setAllPLatformsCtx }}
      >
        <allGenresContext.Provider value={{ allGenresCtx, setAllGenresCtx }}>
          {children}
        </allGenresContext.Provider>
      </allPlatformsContext.Provider>
    </userIdContext.Provider>
  )
}
