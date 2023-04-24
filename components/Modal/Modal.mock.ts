import { IModal } from './Modal'

const base: IModal = {
  as: 'div',
  open: true,
  onClose: () => {},
}

export const mockModalProps = {
  base,
}
