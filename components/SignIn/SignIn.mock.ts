import { ISignIn } from './SignIn'

const base: ISignIn = {
  open: true,
  onClose: () => {},
}

export const mockSignInProps = {
  base,
}
