import { ISearchNav } from './SearchNav'

const base: ISearchNav = {
  placeholder: 'Search for game',
  search: '',
  platform: '',
  genre: '',
  sort: 'metacritic',
  onInputChange: () => {},
  onClick: () => {},
  onChangePlatform: () => {},
  onChangeGenre: () => {},
  onChangeSort: () => {},
}

export const mockSearchNavProps = {
  base,
}
