import { Dialog, Transition } from '@headlessui/react'
import {
  Component,
  Fragment,
  MutableRefObject,
  ReactNode,
  useState,
} from 'react'
import styles from './Modal.module.css'
export interface IModal {
  as: string | Component
  className?: string
  open: boolean
  initialFocus?: MutableRefObject<null>
  children?: ReactNode
  onClose: (d: false) => void
}

export const Modal = ({ open, onClose, children, initialFocus }: IModal) => {
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

          <span className={styles.modal__centering} aria-hidden="true">
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
            <Dialog.Panel>{children}</Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}

Modal.Title = Dialog.Title
Modal.Description = Dialog.Description
