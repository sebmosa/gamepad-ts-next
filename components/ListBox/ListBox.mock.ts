import { IListBox } from './ListBox'

const base: IListBox = {
  label: 'Platforms',
  value: 'All',
  onChange: () => {},
  options: [
    {
      value: '4',
      label: 'PC',
    },
    {
      value: '187',
      label: 'PlayStation 5',
    },
  ],
}

export const mockListBoxProps = {
  base,
}
