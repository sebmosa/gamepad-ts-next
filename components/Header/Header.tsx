import { userIdContext } from '@/context/context'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import { useContext, useEffect, useState } from 'react'
import logo from '../../public/logo-gamepad.svg'
import { LoginModal } from '../LoginModal/LoginModal'
import styles from './Header.module.css'

export interface IHeader {}

export const Header = () => {
  const router = useRouter()
  const { setUserIdCtx } = useContext(userIdContext)
  const [token, setToken] = useState(getCookie('userToken' || null))
  const [isOpen, setIsOpen] = useState(false)

  // workaround for ssr hydration and have same render in client and server side
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  type SetUser = (
    token: string | null,
    id: string | null,
    username: string | null
  ) => void

  const setUser: SetUser = (token, id, username) => {
    if (token) {
      setCookie('userToken', token, { maxAge: 60 * 30 })
      setCookie('userId', id, { maxAge: 60 * 30 })
      setCookie('userName', username, { maxAge: 60 * 30 })
    } else {
      deleteCookie('userToken')
      deleteCookie('userId')
    }
    setToken(token)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const username = getCookie('userName')

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/?page=1">
          <Image
            src={logo}
            className={styles.header_logo}
            aria-label="logo gamepad"
            alt="gamepad"
            priority
          />
        </Link>
      </h1>
      <div className={styles.header_actions}>
        <ul className={styles.header_links}>
          <li>
            <Link
              className={
                router.asPath.includes('/?page=') || router.asPath === '/'
                  ? styles.header_link__active
                  : styles.header_link
              }
              href="/"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              className={
                router.asPath === '/collection'
                  ? styles.header_link__active
                  : styles.header_link
              }
              href="/collection"
            >
              Collection
            </Link>
          </li>
          {token ? (
            <li className={styles.header_username}>
              {username}
              <Link
                className={styles.header_logout}
                href=""
                onClick={() => {
                  setUser(null, null, null)
                  setUserIdCtx('')
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link className={styles.header_link} href="" onClick={openModal}>
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
      <LoginModal
        open={isOpen}
        onClose={closeModal}
        setIsOpen={setIsOpen}
        setUser={setUser}
      />
    </header>
  )
}
