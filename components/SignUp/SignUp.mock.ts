import { ISignUp } from './SignUp'

const base: ISignUp = {
  setUser: (
    token: string | null,
    id: string | null,
    username: string | null
  ) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockSignUpProps = {
  base,
}
