import { ISignUp } from './SignUp'

const base: ISignUp = {
  setUser: (token: string, id: string) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockSignUpProps = {
  base,
}
