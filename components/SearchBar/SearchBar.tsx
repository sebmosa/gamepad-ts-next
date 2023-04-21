import Image from 'next/image.js'
import { MouseEvent, useRef } from 'react'
import closeIcon from '../../public/SearchBar/close.svg'
import searchIcon from '../../public/SearchBar/search.svg'
import styles from './SearchBar.module.css'

export interface ISearchBar {
  placeholder: string
  onChange: (value: string) => void
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  value: string
  disabled?: boolean
}

export const SearchBar = ({
  placeholder,
  onChange,
  value,
  onClick,
  disabled = false,
  ...props
}: ISearchBar) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.search_bar}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        ref={inputRef}
        role="searchbox"
        className={
          value?.length > 0
            ? styles.search_bar__input_active
            : styles.search_bar__input
        }
        {...props}
      />
      <Image
        src={searchIcon}
        aria-label="search"
        alt="search icon"
        className={styles.search_icon}
        onClick={() => inputRef?.current?.focus()}
      />
      {value?.length > 0 && (
        <button
          onClick={onClick}
          className={styles.search_bar__close}
          role="button"
        >
          <Image
            src={closeIcon}
            aria-label="close"
            alt="close icon"
            className={styles.close_icon}
          />
        </button>
      )}
    </div>
  )
}
