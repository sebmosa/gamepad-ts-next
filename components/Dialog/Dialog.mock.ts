import { IDialog } from './Dialog'

const base: IDialog = {
  as: 'div',
  open: true,
  onClose: () => {},
}

export const mockDialogProps = {
  base,
}
