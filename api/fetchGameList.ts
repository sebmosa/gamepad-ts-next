import { IGameList } from '@/types/common'
import { apiUrl } from './index'
export const fetchGameList = async (
  page_size: number,
  page: number,
  search?: string,
  platforms?: string,
  genres?: string,
  rating?: string,
  sort?: string
): Promise<IGameList> => {
  const response = await fetch(
    `${apiUrl}/games?page_size=${page_size.toString()}&page=${page.toString()}&search=${search}&search_precise=true${
      search
        ? `&platforms=${platforms}&genres=${genres}`
        : `&platforms=&genres=`
    }&metacritic=${rating}&ordering=${sort}`
  )
  if (!response.ok) {
    throw new Error('Network response was not ok, no games fetched')
  }

  const games = await response.json()

  return games
}
