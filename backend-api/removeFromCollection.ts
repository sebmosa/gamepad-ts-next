export const removeFromCollection = async (userId: string, gameId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ owner: userId, gameId: gameId }),
    }
  )

  if (!response.ok) {
    throw new Error('Error, no game removed from collection.')
  }

  const result = await response.json()
  return result
}
