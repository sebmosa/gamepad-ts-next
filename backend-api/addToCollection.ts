export const addToCollection = async (
  userId: string,
  gameId: string,
  name: string,
  image: string
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        owner: userId,
        gameId: gameId,
        name: name,
        image: image,
      }),
    }
  )

  if (!response.ok) {
    throw new Error('Error, no game added to collection.')
  }

  const result = await response.json()
  return result
}
