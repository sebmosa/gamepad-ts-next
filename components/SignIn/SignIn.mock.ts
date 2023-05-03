import { ISignIn } from './SignIn'

const base: ISignIn = {
  setUser: (
    token: string | null,
    id: string | null,
    username: string | null
  ) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockSignInProps = {
  base,
}
