import { IGame } from '../types/common'
export const fetchGame = async (id: string): Promise<IGame> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/${id}`)

  if (!response.ok) {
    throw new Error('Network response was not ok, no game details fetched')
  }

  const game = await response.json()

  return game
}
