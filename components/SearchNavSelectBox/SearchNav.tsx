import { ISelectFilter } from '@/types/common'
import { ChangeEvent, MouseEvent, useMemo } from 'react'
import { useGenresQuery } from '../../hooks/useGenresQuery'
import { usePlatformsQuery } from '../../hooks/usePlatformsQuery'
import { SearchBar } from '../SearchBar/SearchBar'
import { SelectBox, SelectOption } from '../SelectBox/SelectBox'
import styles from './SearchNav.module.css'
export interface ISearchNav {
  placeholder: string
  search: string
  platform: any
  genre: any
  sort: string
  onInputChange: (value: string) => void
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onChangePlatform: (event: ChangeEvent<HTMLSelectElement>) => void
  onChangeGenre: (event: ChangeEvent<HTMLSelectElement>) => void
  onChangeSort: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SearchNav = ({
  placeholder,
  search,
  platform,
  genre,
  sort,
  onInputChange,
  onClick,
  onChangePlatform,
  onChangeGenre,
  onChangeSort,
}: ISearchNav) => {
  const platforms = usePlatformsQuery()
  const genres = useGenresQuery()

  const platformsMemo = useMemo(() => platforms.data, [platforms.data])
  const genresMemo = useMemo(() => genres.data, [genres.data])

  const allPlatforms = platformsMemo.map((platform: ISelectFilter) =>
    [platform.id].join()
  )

  const allGenres = genresMemo.map((genre: ISelectFilter) => [genre.id].join())

  const platformList: SelectOption[] = [
    { label: 'All', value: allPlatforms },
    ...platformsMemo.map((platform: ISelectFilter) => ({
      label: platform.name,
      value: platform.id,
    })),
  ]

  const genreList: SelectOption[] = [
    { label: 'All', value: allGenres },
    ...genresMemo.map((genre: ISelectFilter) => ({
      label: genre.name,
      value: genre.id,
    })),
  ]

  const allSort = [
    'name',
    'released',
    'added',
    'created',
    'updated',
    'rating',
    'metacritic',
  ]

  const sortList: SelectOption[] = [
    ...allSort.map((sort: string) => ({
      label: sort,
      value: `-` + sort,
    })),
  ]

  return (
    <div className={styles.search_nav}>
      <SearchBar
        placeholder={placeholder}
        onChange={onInputChange}
        onClick={onClick}
        value={search}
      />

      {search?.length > 0 && (
        <>
          <SelectBox
            options={platformList}
            classNameWrapper={styles.select_box}
            classNameLabel={styles.select_box__label}
            classNameSelect={styles.select_box__select}
            value={platform}
            onChange={onChangePlatform}
            label="Platforms"
          />

          <SelectBox
            options={genreList}
            classNameWrapper={styles.select_box}
            classNameLabel={styles.select_box__label}
            classNameSelect={styles.select_box__select}
            value={genre}
            onChange={onChangeGenre}
            label="Genres"
          />
        </>
      )}
      <SelectBox
        options={sortList}
        classNameWrapper={styles.select_box}
        classNameLabel={styles.select_box__label}
        classNameSelect={styles.select_box__select}
        value={sort}
        onChange={onChangeSort}
        label="Sort by"
      />
    </div>
  )
}
