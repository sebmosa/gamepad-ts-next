import { allGenresContext, allPlatformsContext } from '@/context/context'
import { ISelectFilter } from '@/types/common'
import { MouseEvent, useContext, useEffect, useMemo } from 'react'
import { useGenresQuery } from '../../hooks/useGenresQuery'
import { usePlatformsQuery } from '../../hooks/usePlatformsQuery'
import { SearchBar } from '../SearchBar/SearchBar'
import { Select, SelectOption } from '../Select/Select'
import styles from './SearchNav.module.css'
export interface ISearchNav {
  placeholder: string
  search: string
  platform: any
  genre: any
  sort: string
  onInputChange: (value: string) => void
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onChangePlatform: (value: string) => void
  onChangeGenre: (value: string) => void
  onChangeSort: (value: string) => void
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
  const { setAllPLatformsCtx } = useContext(allPlatformsContext)
  const { setAllGenresCtx } = useContext(allGenresContext)

  const platforms = usePlatformsQuery()
  const genres = useGenresQuery()

  const platformsMemo = useMemo(() => platforms.data, [platforms.data])
  const genresMemo = useMemo(() => genres.data, [genres.data])

  const allPlatforms = platformsMemo.map((platform: ISelectFilter) =>
    [platform.id].join()
  )
  const allGenres = genresMemo.map((genre: ISelectFilter) => [genre.id].join())

  useEffect(() => {
    setAllPLatformsCtx(allPlatforms)
  }, [setAllPLatformsCtx])

  useEffect(() => {
    setAllGenresCtx(allGenres)
  }, [setAllGenresCtx])

  const platformList: SelectOption[] = [
    { name: 'All', value: allPlatforms },
    ...platformsMemo.map((platform: ISelectFilter) => ({
      name: platform.name,
      value: platform.id,
    })),
  ]

  const genreList: SelectOption[] = [
    { name: 'All', value: allGenres },
    ...genresMemo.map((genre: ISelectFilter) => ({
      name: genre.name,
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
      name: sort,
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
          <Select
            options={platformList}
            value={platform}
            onChange={onChangePlatform}
            label="Platforms"
          />

          <Select
            options={genreList}
            value={genre}
            onChange={onChangeGenre}
            label="Genres"
          />
        </>
      )}
      <Select
        options={sortList}
        value={sort}
        onChange={onChangeSort}
        label="Sort by"
      />
    </div>
  )
}
