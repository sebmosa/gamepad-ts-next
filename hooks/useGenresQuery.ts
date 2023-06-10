import { fetchGenres } from '@/backend-api/fetchGenres'
import { useQuery } from '@tanstack/react-query'

export const useGenresQuery = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () => fetchGenres(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
