import { ILoginModal } from './LoginModal'

const base: ILoginModal = {
  open: true,
  onClose: () => {},
  setUser: () => {},
  setIsOpen: () => {},
}

export const mockLoginModalProps = {
  base,
}
