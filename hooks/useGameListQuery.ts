import { fetchGameList } from '@/api-access/fetchGameList'
import { useQuery } from '@tanstack/react-query'

export const useGameListQuery = (
  page_size: number,
  page: number,
  search: string,
  platforms: string,
  genres: string,
  rating: string,
  sort: string
) => {
  return useQuery({
    queryKey: [
      'gameList',
      page_size,
      page,
      search,
      platforms,
      genres,
      rating,
      sort,
    ],
    queryFn: () =>
      fetchGameList(page_size, page, search, platforms, genres, rating, sort),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
    cacheTime: Infinity,
  })
}
