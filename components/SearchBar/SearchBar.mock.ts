import { ISearchBar } from './SearchBar.jsx'

const base: ISearchBar = {
  placeholder: 'search... ',
  onChange: () => {},
  onClick: () => {},
  value: '',
  disabled: true,
}

export const mockSearchBarProps = {
  base,
}
