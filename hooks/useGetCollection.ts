import { fetchCollection } from '@/api/fetchCollection'
import { useQuery } from '@tanstack/react-query'
export const useGetCollection = (id: string) => {
  return useQuery({
    queryKey: ['collection', id],
    queryFn: () => fetchCollection(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  })
}
