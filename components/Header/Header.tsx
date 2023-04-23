import Image from 'next/image.js'
import Link from 'next/link.js'
import { useRouter } from 'next/router.js'
import logo from '../../public/logo-gamepad.svg'
import styles from './Header.module.css'
export interface IHeader {}

export const Header = () => {
  const router = useRouter()

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
        </ul>
      </div>
    </header>
  )
}
