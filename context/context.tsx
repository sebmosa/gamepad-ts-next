import { ReactNode, createContext, useState } from 'react'

export type AllPlatforms = {
  allPlatformsCtx: {}
  setAllPLatformsCtx: (a: {}) => void
}
export type AllGenres = {
  allGenresCtx: {}
  setAllGenresCtx: (a: {}) => void
}

export type Username = {
  usernameCtx: string
  setUsernameCtx: (u: string) => void
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

export const usernameContext = createContext<Username>({
  usernameCtx: '',
  setUsernameCtx: () => {},
})

export const userIdContext = createContext<UserId>({
  userIdCtx: '',
  setUserIdCtx: () => {},
})

export interface IContext {
  children?: ReactNode
}

export const Context = ({ children }: IContext) => {
  const [allPlatformsCtx, setAllPLatformsCtx] = useState<{}>({})
  const [allGenresCtx, setAllGenresCtx] = useState<{}>({})
  const [usernameCtx, setUsernameCtx] = useState<string>('')
  const [userIdCtx, setUserIdCtx] = useState<string>('')

  return (
    <userIdContext.Provider value={{ userIdCtx, setUserIdCtx }}>
      <usernameContext.Provider value={{ usernameCtx, setUsernameCtx }}>
        <allPlatformsContext.Provider
          value={{ allPlatformsCtx, setAllPLatformsCtx }}
        >
          <allGenresContext.Provider value={{ allGenresCtx, setAllGenresCtx }}>
            {children}
          </allGenresContext.Provider>
        </allPlatformsContext.Provider>
      </usernameContext.Provider>
    </userIdContext.Provider>
  )
}
