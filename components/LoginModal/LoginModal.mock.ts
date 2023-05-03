import { ILoginModal } from './LoginModal'

const base: ILoginModal = {
  open: true,
  onClose: () => {},
  setUser: (
    token: string | null,
    id: string | null,
    username: string | null
  ) => {},
  setIsOpen: (open: boolean) => {},
}

export const mockLoginModalProps = {
  base,
}
