import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image.js'
import chevronDown from '../../public/ListBox/chevron-down.svg'
import styles from './ListBox.module.css'
export type SelectOption = {
  name: string
  value: string
}

export interface IListBox {
  value?: string
  label?: string
  disabled?: boolean
  options: SelectOption[]
  onChange: (value: string) => void
}

export const ListBox = ({
  value,
  label,
  disabled = false,
  options,
  onChange,
}: IListBox) => {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <Listbox.Label>{label}</Listbox.Label>
      <div className={styles.listbox_wrapper}>
        <Listbox.Button className={styles.listbox_button}>
          <span>
            {
              (
                options
                  ?.filter((elem) => elem.value === value)
                  .find((elem) => elem.name !== '') ?? options?.[0]
              )?.name
            }
          </span>
          <span className={styles.listbox_button__icon}>
            <Image src={chevronDown} alt="select icon" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        ></Transition>
        <Listbox.Options className={styles.listbox_options}>
          {options?.map(({ value, name }) => (
            <Listbox.Option
              key={value}
              value={value}
              className={({ active }) =>
                active ? styles.listbox_option__active : styles.listbox_option
              }
            >
              {({ selected }) => (
                <span
                  className={
                    selected
                      ? styles.listbox_name__selected
                      : styles.listbox_name
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
