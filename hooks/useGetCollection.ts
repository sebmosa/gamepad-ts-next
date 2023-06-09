import { fetchCollection } from '@/api-access/fetchCollection'
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
