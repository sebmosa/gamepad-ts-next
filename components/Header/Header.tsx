import { userIdContext } from '@/context/context'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import Image from 'next/image.js'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import { useContext, useEffect, useState } from 'react'
import github from '../../public/github.svg'
import linkedin from '../../public/linkedin.svg'
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

  const setTokenCookie = (name: string, value: string | null) => {
    if (value) {
      setCookie(name, value, { maxAge: 60 * 30 })
    } else {
      deleteCookie(name)
    }
  }

  const setUser: SetUser = (token, id, username) => {
    setTokenCookie('userToken', token)
    setTokenCookie('userId', id)
    setTokenCookie('userName', username)
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
            <>
              <li className={styles.header_username}>{username}</li>
              <li>
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
            </>
          ) : (
            <li>
              <Link className={styles.header_link} href="" onClick={openModal}>
                Sign In
              </Link>
            </li>
          )}
          <li>
            <Link
              href="https://www.linkedin.com/in/s%C3%A9bastien-mosagna-85a1a29/"
              className={styles.linkedin_link}
            >
              <Image
                src={linkedin}
                className={styles.linkedin}
                alt="link to linkedin page"
                aria-label="link to linkedin page"
              />
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href="https://github.com/sebmosa/gamepad-ts-next"
        className={styles.github_link}
      >
        <Image
          src={github}
          className={styles.github}
          aria-label="link to github page"
          alt="link to github page"
        />
      </Link>
      <LoginModal
        open={isOpen}
        onClose={closeModal}
        setIsOpen={setIsOpen}
        setUser={setUser}
      />
    </header>
  )
}
