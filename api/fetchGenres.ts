export const fetchGenres = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genres`)

  if (!response.ok) {
    throw new Error('Network response was not ok, no genres fetched')
  }

  const genres = await response.json()
  return genres
}
