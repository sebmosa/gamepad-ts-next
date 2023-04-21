import { apiUrl } from './index'
export const fetchPlatforms = async () => {
  const response = await fetch(`${apiUrl}/platforms`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const platforms = await response.json()
  return platforms
}
