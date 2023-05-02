import { ILoginModal } from './LoginModal'

const base: ILoginModal = {
  open: true,
  onClose: () => {},
  setUser: (token: string, id: string) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockLoginModalProps = {
  base,
}
