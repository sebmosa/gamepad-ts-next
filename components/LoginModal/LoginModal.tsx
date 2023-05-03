import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { SignIn } from '../SignIn/SignIn'
import { SignUp } from '../SignUp/SignUp'
import styles from './LoginModal.module.css'
export interface ILoginModal {
  open: boolean
  onClose: (d: false) => void
  setUser: (
    token: string | null,
    id: string | null,
    username: string | null
  ) => void
  setIsOpen: (open: boolean) => void
}

export const LoginModal = ({
  open,
  onClose,
  setUser,
  setIsOpen,
}: ILoginModal) => {
  const focusRef = useRef(null)

  const [signIn, setSignIn] = useState(true)

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className={styles.modal}
        initialFocus={focusRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={styles.modal_backdrop} aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className={styles.modal_panel}>
            {!signIn && (
              <>
                <Dialog.Title className={styles.modal_title}>
                  Sign Up
                </Dialog.Title>
                <SignUp setUser={setUser} setIsOpen={setIsOpen} />
                <Dialog.Description className={styles.dialog}>
                  Already have a Gamepad account{' '}
                  <a
                    onClick={() => {
                      setSignIn(true)
                    }}
                    className={styles.sign_link}
                  >
                    Sign In
                  </a>
                </Dialog.Description>
              </>
            )}
            {signIn && (
              <>
                <Dialog.Title className={styles.modal_title}>
                  Sign In
                </Dialog.Title>
                <SignIn setUser={setUser} setIsOpen={setIsOpen} />
                <Dialog.Description className={styles.dialog}>
                  Don’t have a Gamepad account?{' '}
                  <a
                    onClick={() => {
                      setSignIn(false)
                    }}
                    className={styles.sign_link}
                  >
                    Sign Up
                  </a>
                </Dialog.Description>
              </>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
