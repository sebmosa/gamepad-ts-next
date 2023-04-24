import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image.js'
import chevronDown from '../../public/Select/chevron-down.svg'
import styles from './Select.module.css'
export type SelectOption = {
  name: string
  value: string
}

export interface ISelect {
  value?: string
  label?: string
  disabled?: boolean
  options: SelectOption[]
  onChange: (value: string) => void
}

export const Select = ({
  value,
  label,
  disabled = false,
  options,
  onChange,
}: ISelect) => {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <Listbox.Label>{label}</Listbox.Label>
      <div className={styles.select_wrapper}>
        <Listbox.Button className={styles.select_button}>
          <span>
            {
              (
                options
                  ?.filter((elem) => elem.value === value)
                  .find((elem) => elem.name !== '') ?? options?.[0]
              )?.name
            }
          </span>
          <span className={styles.select_button__icon}>
            <Image src={chevronDown} alt="select icon" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        ></Transition>
        <Listbox.Options className={styles.select_options}>
          {options?.map(({ value, name }) => (
            <Listbox.Option
              key={value}
              value={value}
              className={({ active }) =>
                active ? styles.select_option__active : styles.select_option
              }
            >
              {({ selected }) => (
                <span
                  className={
                    selected ? styles.select_name__selected : styles.select_name
                  }
                >
                  {name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
