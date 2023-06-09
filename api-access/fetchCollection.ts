import { ICollection } from '../types/common'
export const fetchCollection = async (id: string): Promise<ICollection> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection/${id}`
  )

  if (!response.ok) {
    throw new Error('Network response was not ok, no game details fetched')
  }

  const collection = await response.json()

  return collection
}
