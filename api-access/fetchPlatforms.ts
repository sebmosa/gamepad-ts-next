export const fetchPlatforms = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/platforms`)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const platforms = await response.json()
  return platforms
}
