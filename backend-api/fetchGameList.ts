import { IGameList } from '@/types/common'
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
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/games?page_size=${page_size.toString()}&page=${page.toString()}&search=${search}&search_precise=true${
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
