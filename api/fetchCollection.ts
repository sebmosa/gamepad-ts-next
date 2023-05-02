import { ICollection } from '../types/common'
import { apiUrl } from './index'
export const fetchCollection = async (id: string): Promise<ICollection> => {
  const response = await fetch(`${apiUrl}/collection/${id}`)

  if (!response.ok) {
    throw new Error('Network response was not ok, no game details fetched')
  }

  const collection = await response.json()

  return collection
}
