import { IGame } from '../types/common'
import { apiUrl } from './index'
export const fetchGame = async (id: string): Promise<IGame> => {
  const response = await fetch(`${apiUrl}/games/${id}`)

  if (!response.ok) {
    throw new Error('Network response was not ok, no game details fetched')
  }

  const game = await response.json()

  return game
}
