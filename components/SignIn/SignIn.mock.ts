import { ISignIn } from './SignIn'

const base: ISignIn = {
  setUser: (token: string, id: string) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockSignInProps = {
  base,
}