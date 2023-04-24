import { ISelect } from './Select'

const base: ISelect = {
  label: 'Platforms',
  value: 'All',
  onChange: () => {},
  options: [
    {
      value: '4',
      name: 'PC',
    },
    {
      value: '187',
      name: 'PlayStation 5',
    },
  ],
}

export const mockSelectProps = {
  base,
}
