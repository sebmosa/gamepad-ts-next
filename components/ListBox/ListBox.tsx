import { Listbox, Transition } from '@headlessui/react'
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
      <Listbox.Label className={styles.listbox_label}>{label}</Listbox.Label>
      <Listbox.Button className={styles.listbox_button}>
        {options
          ?.filter((elem) => elem.value === value)
          .map((elem) => elem.name ?? options[0].name)}
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
            className={styles.listbox_option}
          >
            {name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
