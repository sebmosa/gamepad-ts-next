import { Transition } from '@headlessui/react'
import {
  Component,
  Fragment,
  MutableRefObject,
  ReactNode,
  useState,
} from 'react'
import styles from './Dialog.module.css'
export interface IDialog {
  as: string | Component
  className?: string
  open: boolean
  initialFocus?: MutableRefObject<HTMLDivElement>
  children?: ReactNode
  onClose: (d: false) => void
}

export const Dialog = ({ open, onClose, children, initialFocus }: IDialog) => {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <div>
      <Transition
        appear
        beforeEnter={() => setIsOpen(true)}
        afterLeave={() => setIsOpen(false)}
        show={open}
        as={Fragment}
      >
        <Dialog
          as="div"
          open={isOpen}
          onClose={onClose}
          initialFocus={initialFocus}
          className={styles.dialog}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          ></Transition.Child>
          <span className={styles.dialog__centering} aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}
