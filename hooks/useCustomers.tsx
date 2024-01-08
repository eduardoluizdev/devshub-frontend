import { useQuery } from '@tanstack/react-query'

import { customerResource } from '@/resources/customers'

export function useCustomers() {
  const { data, isFetching } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerResource.getAll('client'),
    staleTime: Infinity,
  })

  return { customers: data ?? [], isFetching }
}
