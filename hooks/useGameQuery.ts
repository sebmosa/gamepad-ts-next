import { fetchGame } from '@/api/fetchGame'
import { useQuery } from '@tanstack/react-query'
export const useGameQuery = (id: string) => {
  return useQuery({
    queryKey: ['game', id],
    queryFn: () => fetchGame(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
    cacheTime: Infinity,
  })
}
