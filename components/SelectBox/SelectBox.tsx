import { ChangeEvent } from 'react'

export type SelectOption = {
  label: string
  value: string
}

export interface ISelectBox {
  value?: string
  label?: string
  disabled?: boolean
  classNameSelect?: string
  classNameLabel?: string
  classNameWrapper?: string
  options: SelectOption[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SelectBox = ({
  value,
  label,
  disabled,
  classNameSelect,
  classNameLabel,
  classNameWrapper,
  options,
  onChange,
}: ISelectBox) => {
  const selectBox = (
    <select
      className={classNameSelect}
      disabled={disabled}
      onChange={onChange}
      value={value}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )

  const result = (
    <>
      <label className={classNameLabel}>{label}</label>
      {selectBox}
    </>
  )

  return <div className={classNameWrapper}>{result}</div>
}
