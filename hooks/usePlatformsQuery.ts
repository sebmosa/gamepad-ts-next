import { useQuery } from '@tanstack/react-query'
import { fetchPlatforms } from '../backend-api/fetchPlatforms'

export const usePlatformsQuery = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () => fetchPlatforms(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
