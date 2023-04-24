import { MutableRefObject } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './SignIn.module.css'
export interface ISignIn {
  open: boolean
  initialFocus?: MutableRefObject<null>
  onClose: (d: false) => void
}

export const SignIn = ({ open, onClose, initialFocus }: ISignIn) => {
  // const [open, setOpen] = useState(false)
  // const initialFocus = useRef(null)
  // const closeDialog = () => {
  //   setOpen(false)
  // }

  return (
    <Modal as="div" open={open} onClose={onClose} initialFocus={initialFocus}>
      <Modal.Title as="h3" className={styles.signin_title}>
        Sign In
      </Modal.Title>
    </Modal>
  )
}
